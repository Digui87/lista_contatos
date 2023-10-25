import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatoState = {
  lista: Contato[]
}

const initialState: ContatoState = {
  lista: [
    {
      nomeCompleto: 'Borges de Medeiros',
      telefone: '(61) 99999-6666',
      email: 'borges69@gmail.com',
      id: 1
    },
    {
      nomeCompleto: 'Tiago Silva',
      telefone: '(61) 98181-5678',
      email: 'tsilva10@gmail.com',
      id: 2
    }
  ]
}

const contatoSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.lista = state.lista.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.lista.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexDoContato !== -1) {
        state.lista[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const ultimoContato = state.lista[state.lista.length - 1]

      const ContatoNovo = {
        ...action.payload,
        id: ultimoContato ? ultimoContato.id + 1 : 1
      }
      state.lista.push(ContatoNovo)
    }
  }
})

export const { remover, editar, cadastrar } = contatoSlice.actions
export default contatoSlice.reducer
