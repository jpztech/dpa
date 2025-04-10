import { ClipboardForm } from 'renderer/components/clipboard-form';


import { MainContainer } from './main-container';

export function ClipboardScreen() {
  return (
    <MainContainer title="Clipboard">
      <ClipboardForm />
    </MainContainer>
  )
}
