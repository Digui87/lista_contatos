import { styled } from 'styled-components'
import { BotaoSalvar } from '../../styles'
import variaveis from '../../styles/variaveis'

export const Container = styled.div`
  background-color: ${variaveis.cinzaEscuro};
  padding: 32px 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 60vh;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 70vh;
  }
  @media (min-width: 769px) and (max-width: 1180px) {
    padding: 10%;
    height: 70vh;
    width: 100vw;
  }
`
export const FormCadastro = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  justify-content: center;
  align-items: center;

  input {
    width: 60%;
    padding: 12px;
    @media (max-width: 820px) {
      padding: 12px;
      margin-bottom: 10px;
      width: 80%;
    }
    @media (min-width: 769px) and (max-width: 1180px) {
      padding: 20px;
      margin-bottom: 10px;
    }
  }
`
export const BotaoAdicionar = styled(BotaoSalvar)`
  width: 60%;
  @media (max-width: 820px) {
    padding: 12px;
    margin-bottom: 10px;
    width: 80%;
  }
  @media (min-width: 769px) and (max-width: 1180px) {
    padding: 20px;
  }
`
export const InputTel = styled.input`
  width: 80%;
  padding: 12px;
`
