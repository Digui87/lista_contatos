import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import store from './store'

import EstiloGlobal from './styles'
import { Container } from './styles'
import Home from './pages/home'
import AdicionarContatos from './pages/adicionarContatos'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/adicionar-contato',
    element: <AdicionarContatos />
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}

export default App
