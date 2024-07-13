import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import Projetos from './containers/Projetos'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import EstiloGlobal, { Container } from './styles'
import temaLight from './themes/light'
import temaDark from './themes/dark'
import Rodape from './containers/Rodape'




function App() {
  const [estaUsandoTemaDark, setEstaUsandoTemaDark] = useState (false)

  function TrocaTema( ) {
    setEstaUsandoTemaDark (!estaUsandoTemaDark)
  }

  return (
    <ThemeProvider theme={ estaUsandoTemaDark ? temaDark : temaLight }>
    <EstiloGlobal />
    <Container>
      <Sidebar trocaTema={TrocaTema}/>
      <main>
        <Sobre/>
        <Projetos/>
      </main>
    </Container>
    <Rodape/>
    </ThemeProvider>


  )
}

export default App
