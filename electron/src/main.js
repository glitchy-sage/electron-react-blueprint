require('v8-compile-cache');
const { app, BrowserWindow, ipcMain } = require('electron');
const { join } = require('path');
const Store = require('electron-store');
const isDev = require('electron-is-dev');

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      preload: `${join(__dirname, 'preload.js')}`
    }

  });

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    mainWindow.focus();
  });

  // Load page or localhost
  !isDev ? mainWindow.loadFile(`${join(__dirname, '..', 'public', 'index.html')}`) : mainWindow.loadURL(`http://localhost:3000`);

  // Remove Menu or open dev tools.
  !isDev ? mainWindow.setMenuBarVisibility(false) : mainWindow.webContents.openDevTools();


};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// Basic store items
const store = new Store([]);

ipcMain.on('electron-store-get', async (event, val) => {
  event.returnValue = store.get(val);
});

ipcMain.on('electron-store-has', async (event, val) => {
  event.returnValue = store.has(val);
});

ipcMain.on('electron-store-set', async (event, key, val) => {
  store.set(key, val);
});