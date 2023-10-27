import { useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import Contato from '../../components/Contatos'
import * as S from './styles'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    if (termo !== undefined) {
      return itens.filter(
        (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )
    } else {
      return itens
    }
  }

  function retornaContatos() {
    if (itens.length <= 0) {
      return (
        <S.textContainer>
          <h2>Nenhum contato para mostrar</h2>
          <p>Adicione contatos clicando no botao</p>
        </S.textContainer>
      )
    } else {
      const contatos = filtraContatos()
      return contatos.map((c) => (
        <S.Contatos key={c.nome}>
          <Contato nome={c.nome} email={c.email} tel={c.tel} />
        </S.Contatos>
      ))
    }
  }

  return (
    <>
      <S.ContatosContainer>{retornaContatos()}</S.ContatosContainer>
    </>
  )
}

export default ListaDeContatos
