import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Footer = styled.footer`
  background-color: ${variaveis.cinza};
  position: relative;
  display: flex;
  justify-content: end;
  height: 80px;
  @media (max-width: 768px) {
    height: 10vh;
    padding: 10px;
  }
  @media (min-width: 769px) and (max-width: 1180px) {
    height: 10vh;
    padding: 10px;
    width: 100vw;
  }
`
