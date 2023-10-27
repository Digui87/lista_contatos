import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { BotaoSalvar } from '../../styles'
import variaveis from '../../styles/variaveis'

export const BotaoAdicionar = styled(Link)`
  display: flex;
  padding: 6px;
  margin-right: 20px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
  color: #fff;
  background-color: ${variaveis.azulEscuro};
  border: none;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: ${variaveis.azulClaro};
  }
`

export const BotaoCancelar = styled(BotaoSalvar)`
  background-color: ${variaveis.vermelhoEscuro};
  margin-left: 8px;
  &:hover {
    background-color: ${variaveis.vermelhoClaro};
  }
`

export const BotaoLista = styled(BotaoAdicionar)`
  border: none;
`
