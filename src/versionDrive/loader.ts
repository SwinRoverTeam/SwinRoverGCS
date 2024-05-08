import path from 'path';
import { app, BrowserWindow, shell, ipcMain } from 'electron';
import { autoUpdater } from 'electron-updater';
import log from 'electron-log';;
import { resolveHtmlPath } from '../main/util';
import EventEmitter from 'events';
import fs from 'fs';
const isDevelopment = process.env.NODE_ENV === 'development';
const Documents = app.getPath('documents');

export default class AppUpdater extends EventEmitter{
    updater: any;
    loadWindow: BrowserWindow | null = null;
  constructor() {
    super();
    this.loadWindow;
    this.window();
    log.transports.file.level = 'info';
    this.updater = autoUpdater;
    this.updater.logger = log;
    this.updater.logger.transports.file.level = 'info';
    console.log('AppUpdater:waitingtill ready');
    setTimeout(async () => {
      console.log('AppUpdater:ready');
      this.mainLoop();
    }, 5000);
  }
  loadConfigs(){
    this.loadWindow?.webContents.send('data', ['Loading Configs']);
    const srtgcsPath = path.join(Documents, 'SRTGCS');
    if (isDevelopment) {
      if (!fs.existsSync(srtgcsPath)) {
        console.log('AppUpdater:SRTGCS not found');
        fs.mkdirSync(srtgcsPath);
        
      }
      const configPath = path.join(srtgcsPath, 'configs');
      if (!fs.existsSync(configPath)) {
       
        fs.mkdirSync(configPath);
        fs.copyFileSync(path.join(__dirname, 'config.json'), path.join(configPath, 'upconfig.json'));
      // ...
      }
    }
    // ...
}
  mainLoop(){
    this.loadConfigs();
    this.loadWindow?.webContents.send('data', ['Checking for Updates']);
    
    this.updater.on('update-available', () => {
      this.loadWindow?.webContents.send('data', ['Update Available']);
    });
    this.updater.on('update-not-available', () => {
      this.loadWindow?.webContents.send('data', ['Update Not Available']);
    });
    this.updater.on('error', (error: any) => {
      this.loadWindow?.webContents.send('data', ['Error: ' + error]);
      this.emit('ready');
    });
    this.updater.on('update-downloaded', () => {
      this.loadWindow?.webContents.send('data', ['dProgress' , 25]);
      this.loadWindow?.webContents.send('data', ['Installing']);
    });
    if (isDevelopment) {
      this.updater.on('download-progress', (progress: any) => {
        this.loadWindow?.webContents.send('data', ['dProgress' ,progress.percent]);
      });
      setTimeout(() => {
        console.log('AppUpdater:isDevEnvironment');
        this.updater.emit('update-available');
      
        let percent = 0;
        this.loadWindow?.webContents.send('data', ['Downloading']);
        const intervalId = setInterval(() => {
          if (percent <= 100) {
            this.updater.emit('download-progress', { percent });
            percent++;
          } else {
            clearInterval(intervalId);
            this.updater.emit('update-downloaded');
            setTimeout(() => {
              this.loadWindow?.webContents.send('data', ['Installing']);
              setTimeout(() => {
                this.emit('ready');
              }, 1000);
            }, 1000);
          }
        }, 100); // Increase percent every 0.1 second
      }, 5000);
      return;
    } else {
      this.updater.on('download-progress', (progress: any) => {
        this.loadWindow?.webContents.send('data', ['dProgress' ,progress.percent]);
      });
      this.updater.checkForUpdates();
    }
  }
  async closeWindow(){
    console.log('AppUpdater:closeWindow');
    this.loadWindow?.close();
  }
  window(){
      if (isDevelopment) {
        require('electron-debug')();
      }
      const createWindow = async () => {
        const RESOURCES_PATH = app.isPackaged
          ? path.join(process.resourcesPath, 'assets')
          : path.join(__dirname, '../../assets');
      
        const getAssetPath = (...paths: string[]): string => {
          return path.join(RESOURCES_PATH, ...paths);
        };
      
        this.loadWindow = new BrowserWindow({
          show: false,
          width: 300,
          height: 400,
          frame: false,
          icon: getAssetPath('icon.png'),
          webPreferences: {
            preload: app.isPackaged
              ? path.join(__dirname, 'Loadpreload.js')
              : path.join(__dirname, '../../.erb/dll/Loadpreload.js'),
          },
        });
      
        this.loadWindow.loadURL(resolveHtmlPath('loader.html'));
      
        this.loadWindow.on('ready-to-show', () => {
          if (!this.loadWindow) {
            throw new Error('"loadWindow" is not defined');
          }
          this.loadWindow.show();
          this.loadWindow.webContents.openDevTools();
          this.loadWindow.focus();
        });
      
        this.loadWindow.on('closed', () => {
          //this.loadWindow = null;
        });
      
        // Remove this if your app does not use auto updates
        // eslint-disable-next-line
      };
      createWindow();
  }
}





