import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Container, FormCadastro, BotaoAdicionar, InputTel } from './styles'
import Contato from '../../models/Contato'
import { cadastrar } from '../../store/reducers/Contatos'

export const AdicionaContato = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [tel, setTel] = useState('')
  const [email, setEmail] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    const contatoParaAdicionar = new Contato(nome, tel, email)

    dispatch(cadastrar(contatoParaAdicionar))
    setNome('')
    setTel('')
    setEmail('')
    navigate('/')
  }

  return (
    <Container>
      <FormCadastro onSubmit={cadastrarContato}>
        <input
          value={nome}
          onChange={({ target }) => setNome(target.value)}
          type="text"
          placeholder="Nome"
          required
        />
        <InputTel
          value={tel}
          onChange={({ target }) => setTel(target.value)}
          type="text"
          placeholder="numero"
          required
        />
        <input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="email"
          placeholder="E-mail"
        />
        <BotaoAdicionar type="submit">Cadastrar</BotaoAdicionar>
      </FormCadastro>
    </Container>
  )
}
