
const { contextBridge, ipcRenderer } = require('electron');
const exec = require('child_process').exec;

const execPromise = (cmd) => new Promise((resolve, reject) => {
    exec(cmd, (err, stdout, stderr) => {
        if (err) {
            reject(stderr);
        } else {
            resolve(stdout)
        };
    });
});

const timeoutPromise = (timeout) => new Promise((_, reject) => setTimeout(() => reject(new Error('Request timed out')), timeout));

const execute = async (cmd) => {
    try {
        const output = await Promise.race([execPromise(`${cmd}`), timeoutPromise(30000)]);
        return output;
    }
    catch (e) {
        throw e;
    }
};

contextBridge.exposeInMainWorld('electron', {
    store: {
        get(key) {
            return ipcRenderer.sendSync('electron-store-get', key);
        },
        has(key) {
            return ipcRenderer.sendSync('electron-store-has', key);
        },
        set(property, val) {
            ipcRenderer.send('electron-store-set', property, val);
        },
        // Other method you want to add like has(), reset(), etc.
    },
    commander: {
        execute
    }
});

// window.addEventListener('DOMContentLoaded', () => {
//     console.log('Preload loaded!');
// })