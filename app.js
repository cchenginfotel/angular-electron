const {app, BrowserWindow} = require('electron') 
// app handles the life cycle of the application (ready, window-all-closed, etc)
// BrowserWindow => an instance of the rendring app
const url = require("url");
const path = require("path"); // to work with path

let mainWindow;

// create the application window
function createWindow () {
		mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		backgroundColor: '#fff',
		webPreferences: {
			nodeIntegration: true // => allows access to node.js Globals directly from the frontend code
		}
	})

	// select which file to open (don't select files located in /src directory)
	mainWindow.loadFile(path.join(__dirname, "dist/angular-electron/index.html"))
	// Open the DevTools on the main window
	// mainWindow.webContents.openDevTools()

	// on closing the window
		mainWindow.on('closed', function () {
		mainWindow = null
	})

	// In case the page reloading fails, it sets the path to index.html (main page) again
	// This happens because single-page-applications doesn't have a "navigated_route"
	mainWindow.webContents.on('did-fail-load', () => {
		console.log('did-fail-load');
		mainWindow.loadFile(path.join(__dirname, "/dist/angular-electron/index.html"))
	});
}

// once the app is ready, create the window
app.on('ready', createWindow)

app.on('window-all-closed', function () {
	// macOs specific closing process
	if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
	// macOs specific => create a window if app is active but window is closed
	if (mainWindow === null) createWindow()
})

