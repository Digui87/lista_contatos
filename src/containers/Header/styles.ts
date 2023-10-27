import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Header = styled.header`
  width: 100%;
  background-color: ${variaveis.cinza};
  height: 120px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 20vh;
    h1 {
      font-size: 26px;
    }
  }
  @media (min-width: 769px) and (max-width: 1180px) {
    padding: 60px 100px;
    height: 20vh;
    h1 {
      font-size: 40px;
    }
    h2 {
      font-size: 28px;
    }
  }

  h1 {
    margin: 0;
    padding: 0;
    text-align: center;
    margin-bottom: 8px;
    color: ${variaveis.azulEscuro};
    text-shadow: 1px 1px 2px ${variaveis.shadow};
  }
  h2 {
    text-align: center;
    margin: 0;
    padding: 0;
    color: #fff;
    text-shadow: 1px 1px 2px ${variaveis.shadow};
  }
`
