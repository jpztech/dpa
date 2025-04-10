import { app, ipcMain, clipboard } from 'electron'

import { makeAppWithSingleInstanceLock } from 'lib/electron-app/factories/app/instance'
import { makeAppSetup } from 'lib/electron-app/factories/app/setup'
import { MainWindow } from './windows/main'

makeAppWithSingleInstanceLock(async () => {
  await app.whenReady()
  await makeAppSetup(MainWindow)
})

// Listen for clipboard write requests
ipcMain.on('write-to-clipboard', (_event, text) => {
  clipboard.writeText(text);
});