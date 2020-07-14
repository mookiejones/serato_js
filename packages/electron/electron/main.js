const {
    app,
    BrowserWindow
} = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');
console.log(`isDev: ${isDev}`);

const { getDefaultPath } = require('serato_js');


let mainWindow;
debugger;

const filePath = getDefaultPath();
console.log(filePath);
function createWindow() {

    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        show: false,
        webPreferences: {
            nodeIntegration: true,
        }
    });
    const startURL = isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`;

    mainWindow.loadURL(startURL);

    mainWindow.setTitle("Serato")
    mainWindow.once('ready-to-show', () => mainWindow.show());
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}
app.on('ready', createWindow);