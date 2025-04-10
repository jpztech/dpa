import { useEffect } from 'react'

// The "App" comes from the context bridge in preload/index.ts
const { App } = window

import {
  Alert,
  AlertTitle,
  AlertDescription,
} from 'renderer/components/ui/alert'
import { Terminal } from 'lucide-react'

import { MainContainer } from './main-container';

export function MainScreen() {
  useEffect(() => {
    // check the console on dev tools
    App.sayHelloFromBridge()
  }, [])


  return (
    <MainContainer title="Main">
      <Alert className="mt-5 bg-transparent border-transparent text-accent w-fit">
        <AlertTitle className="text-5xl text-teal-400">
          Hi
        </AlertTitle>

        <AlertDescription className="flex items-center gap-2 text-lg">
          <Terminal className="size-6 text-fuchsia-300" />

          <span className="text-gray-400">
            It's time to build something awesome!
          </span>
        </AlertDescription>
      </Alert>
    </MainContainer>
  )
}
