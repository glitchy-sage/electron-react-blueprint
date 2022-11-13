const { contextBridge, ipcRenderer } = require('electron');

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
    }
});

window.addEventListener('DOMContentLoaded', () => {
    console.log('Preload loaded!');
})