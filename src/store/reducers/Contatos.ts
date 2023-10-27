import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatoState = {
  itens: Contato[]
}

const initialState: ContatoState = {
  itens: []
}

const ContatoSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<string>) => {
      state.itens = state.itens.filter(
        (contatos) => contatos.tel !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.tel === action.payload.tel
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Contato>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (contatoJaExiste) {
        alert('Você ja adicionou esse contato')
      } else {
        state.itens.push(action.payload)
        alert('Contato adicionado com sucesso')
      }
    }
  }
})

export const { remover, editar, cadastrar } = ContatoSlice.actions
export default ContatoSlice.reducer
