import { BotaoAdicionar, BotaoHome } from '../../components/Botoes'
import * as S from './styles'

const Footer = () => {
  return (
    <S.Footer>
      <BotaoAdicionar />
    </S.Footer>
  )
}
export const FooterAdicionar = () => {
  return (
    <S.Footer>
      <BotaoHome />
    </S.Footer>
  )
}

export default Footer
