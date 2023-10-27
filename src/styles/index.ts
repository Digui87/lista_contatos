import { createGlobalStyle, styled } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 1vw;
    box-sizing: border-box;
    list-style: none;
    font-family: Roboto, sans-serif;
    @media (max-width:1180px) {
      padding: 0;
    }
  }
  body {
    background-color: #1e272e;
  }
`
export const Container = styled.div`
  max-width: 960px;
  width: 100%;
  justify-content: center;
  margin: 0 auto;

  @media (max-width: 1180px) {
    max-width: 100%;
    margin: 0;
  }
`
export const BotaoSalvar = styled.button`
  font-weight: bold;
  color: #fff;
  background-color: green;
  border: none;
  cursor: pointer;
  padding: 8px;
  &:hover {
    background-color: rgb(4, 167, 4);
  }
`
export default EstiloGlobal
