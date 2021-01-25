const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

let win;

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 600,
    height: 670,
    // icon: `file://${__dirname}/dist/assets/logo.png`
  });

  const url = new URL(
    path.join(
      `file:///Users/cbaily/Desktop/chad/Random/overnight-oats/web/dist`,
      `/web/index.html`
    )
  );

  win.loadURL(url.toString());

  //   pathname: path.join(`/Users/cbaily/Desktop/chad/Random/overnight-oats/web/dist`, `/web/index.html`),
  //   protocol: "file:",
  //   slashes: true
  // }));

  // uncomment below to open the DevTools.
  // win.webContents.openDevTools()

  // Event when the window is closed.
  win.on('closed', function () {
    win = null;
  });
}

// Create window on electron intialization
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  // macOS specific close process
  if (win === null) {
    createWindow();
  }
});
