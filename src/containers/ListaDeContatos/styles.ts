import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Contatos = styled.div`
  margin: 0;
  padding: 0;
`
export const ContatosContainer = styled.div`
  max-height: 600px;
  overflow-y: scroll;
  background-color: ${variaveis.cinzaEscuro};
  padding: 16px 8px 32px 8px;
  @media (max-width: 768px) {
    padding-top: 10px;
    max-height: 100%;
    height: 70vh;
  }
  @media (min-width: 769px) and (max-width: 1180px) {
    padding: 40px;
    max-height: 100%;
    height: 70vh;
    width: 100vw;
  }
`
export const textContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  text-shadow: 1px 1px 2px ${variaveis.shadow};

  h2 {
    padding: 0;
    font-size: 20px;
  }
  p {
    font-size: 16px;
  }
`
