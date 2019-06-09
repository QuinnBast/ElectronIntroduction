// requires electon modules to create a window that can load an html file
const {app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

function createWindow(){
    let win = new BrowserWindow({width: 800, height: 600});
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }))
}

app.on('ready', createWindow);