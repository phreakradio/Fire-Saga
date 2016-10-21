'use strict';

var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});

function createWindow () {
    mainWindow = new BrowserWindow({
        frame: false,
        resizable: false,
        width: 800, 
        height: 600
    });

    mainWindow.loadURL(`file://${__dirname}/app/index.html`);

    // @DEBUGGING 
    // mainWindow.webContents.openDevTools();

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}


//     settingsWindow = new BrowserWindow({
//         frame: false,
//         height: 200,
//         resizable: false,
//         width: 200
//     });
