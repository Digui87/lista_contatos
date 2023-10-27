import { configureStore } from '@reduxjs/toolkit'
import ContatoReducer from './reducers/Contatos'
import FiltroReducer from './reducers/filtro'

const store = configureStore({
  reducer: {
    contatos: ContatoReducer,
    filtro: FiltroReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
