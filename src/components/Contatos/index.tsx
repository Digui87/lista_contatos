import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

import {
  ContatoItems,
  ContatoItem,
  ContainerBotoes,
  MenuEditar,
  Input,
  InputCel,
  BotaoEditar,
  BotaoExcluir
} from './styles'
import { remover, editar } from '../../store/reducers/Contatos'
import { BotaoCancelar } from '../Botoes/styles'
import { BotaoSalvar } from '../../styles'

type Props = {
  nome: string
  tel: string
  email: string
}
export const Contato = ({
  email: emailOriginal,
  nome: nomeOriginal,
  tel: telOriginal
}: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)
  const dispatch = useDispatch()
  const [nome, setNome] = useState('')
  const [tel, setTel] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (nomeOriginal.length > 0) {
      setNome(nomeOriginal)
    }
    if (telOriginal.length > 0) {
      setTel(telOriginal)
    }
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [emailOriginal, nomeOriginal, telOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setNome(nomeOriginal)
    setTel(telOriginal)
    setEmail(emailOriginal)
  }

  return (
    <ContatoItems>
      <ContatoItem>
        <label htmlFor="nome">Nome:</label>
        <Input
          estaEditando={estaEditando}
          type="text"
          id="nome"
          disabled={!estaEditando}
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
        />
      </ContatoItem>
      <ContatoItem>
        <label htmlFor="tel">Telefone:</label>
        <InputCel
          estaEditando={estaEditando}
          type="text"
          id="tel"
          disabled={!estaEditando}
          value={tel}
          onChange={(evento) => setTel(evento.target.value)}
        />
      </ContatoItem>
      <ContatoItem>
        <label htmlFor="email">E-mail:</label>
        <Input
          estaEditando={estaEditando}
          type="text"
          id="email"
          disabled={!estaEditando}
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
        />
      </ContatoItem>
      <MenuEditar>
        <BotaoEditar type="submit" onClick={() => setEstaEditando(true)}>
          Editar
        </BotaoEditar>
        <BotaoExcluir type="submit" onClick={() => dispatch(remover(tel))}>
          Remover
        </BotaoExcluir>
      </MenuEditar>
      {estaEditando ? (
        <>
          <ContainerBotoes>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    nome,
                    email,
                    tel
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <BotaoCancelar onClick={cancelarEdicao}>Cancelar</BotaoCancelar>
          </ContainerBotoes>
        </>
      ) : (
        ''
      )}
    </ContatoItems>
  )
}

export default Contato
