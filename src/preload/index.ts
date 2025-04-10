import { contextBridge, ipcRenderer } from 'electron'

declare global {
  interface Window {
    App: typeof API
  }
}

const API = {
  sayHelloFromBridge: () => console.log('\nHello from bridgeAPI! 👋\n\n'),
  writeToClipboard: (text: string) => ipcRenderer.send('write-to-clipboard', text),
  username: process.env.USER,
}

contextBridge.exposeInMainWorld('App', API)
