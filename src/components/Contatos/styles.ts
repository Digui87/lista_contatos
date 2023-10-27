import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

type Props = {
  estaEditando: boolean
}

export const ContatoItem = styled.li`
  padding: 0;
  margin-bottom: 4px;
  list-style: none;
  @media (min-width: 769px) and (max-width: 1023px) {
    padding: 8px;
  }
`
export const ContatoItems = styled.ul`
  background-color: #fff;
  padding-top: 30px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 6px;
  position: relative;
  font-size: 18px;

  label {
    font-size: 16px;
    padding: 0;
  }
  @media (max-width: 768px) {
    padding: 8px;
  }
  @media (min-width: 769px) and (max-width: 1180px) {
    padding: 16px;
  }
  @media (min-width: 769px) and (max-width: 1180px) {
    label {
      font-size: 18px;
    }
    input {
      font-size: 14px;
    }
  }
`
export const Input = styled.input<Props>`
  background-color: transparent;
  padding: 4px;
  margin-left: 2px;
  border: none;
  border-bottom: ${(props) => (props.estaEditando ? '1px solid #000' : 'none')};
  width: 70%;
  color: #000;
  font-size: 14px;
`
export const InputCel = styled(Input)<Props>`
  background-color: transparent;
  padding: 4px;
  margin-left: 2px;
  border: none;
  border-bottom: ${(props) => (props.estaEditando ? '1px solid #000' : 'none')};
  width: 70%;
  color: #000;
  font-size: 14px;
`
export const ContainerBotoes = styled.div`
  text-align: end;
  padding: 0;
  padding-top: 8px;
`
export const MenuEditar = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  img {
    max-width: 20px;
    margin-left: 16px;
    padding: 0;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  }
`
export const BotaoEditar = styled.button`
  padding: 8px;
  font-size: 14px;
  font-weight: bold;
  background-color: ${variaveis.cinzaEscuro};
  color: #fff;
`
export const BotaoExcluir = styled(BotaoEditar)`
  background-color: ${variaveis.vermelhoEscuro};
  color: #fff;
`
