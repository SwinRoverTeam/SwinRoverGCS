const { app, BrowserWindow, screen } = require('electron');
const { autoUpdater } = require('electron-updater');
const { ipcMain } = require('electron');
const isDev = require('electron-is-dev');
const fs = require('fs');

let mainWindow, loaderWindow;
function createWindow() {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;

    mainWindow = new BrowserWindow({
        width: width,
        height: height,
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.loadFile('./public/index.html');

    mainWindow.on('closed', function () {
        app.quit();
    });
}

async function createLoader(){
    loaderWindow = new BrowserWindow({
        width: 300,
        height: 400,
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false, // Also set this to false
          }
    });

    loaderWindow.loadFile('./public/loader/loader.html');

}


app.on('ready', () => {
    // Spawn the other Electron app
    runUpdater();
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

async function runUpdater() {
    await createLoader();
    update();
}


function update(){
        //Event handler when the loading is complete
    autoUpdater.on('update-downloaded', (info) => {
        if (!isDev) {
            autoUpdater.quitAndInstall();
        }
        console.log('Update downloaded');
        loaderWindow.webContents.send('update-downloaded');
        loadConfigs();
    });
    autoUpdater.on('checking-for-update', () => {
        console.log('Checking for update...');
        loaderWindow.webContents.send('checking-for-update');
    }
    );
    autoUpdater.on('update-available', () => {
        console.log('Update available!');
        loaderWindow.webContents.send('update-available');
    });
    autoUpdater.on('update-not-available', () => {
        console.log('Update not available.');
        loaderWindow.webContents.send('update-not-available');
        loadConfigs();
    });
    console.log('Checking for updates...')
    if (!isDev){
        console.log('Checking...')
        autoUpdater.checkForUpdatesAndNotify();
    } else {
        setTimeout(() => {
            autoUpdater.emit('update-available');
            setTimeout(() => {
                autoUpdater.emit('update-downloaded');
            }, 1000);
        }, 2000);
    }
}

function loadConfigs() {
    if (isDev) {
        console.log('Development mode, skipping config load');
        loaderWindow.webContents.send('configs-loaded');
        createWindow();
        return;
    } else {
        fs.readFile('config.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            const config = JSON.parse(data);
        });
    }
}






