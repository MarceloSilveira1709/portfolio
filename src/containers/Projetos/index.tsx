import Projeto from "../../components/Projeto";
import Titulo from "../../components/Titulo";
import Efood from "../../components/assets/images/Efood.png"
import Pousada from "../../components/assets/images/Pousada.png"
import Disney from "../../components/assets/images/disney.png"


import { Lista } from './styles'

const Projetos = () => (
  <section>
    <Titulo fontSize={16}>Projetos</Titulo>
    <Lista>
      <li>
        <Projeto titulo="Restaurantes Efood" descricao="Pagina de restaurantes desenvovida em react , typescript." link={"https://github.com/MarceloSilveira1709/Efood"} imagem={Efood} />
      </li>
      <li>
        <Projeto titulo="Pousada Beira mar" descricao="Site de uma pousada desenvolvido com  bootstrap " link={"https://github.com/MarceloSilveira1709/Pousada-Beira-Mar"} imagem={Pousada} />
      </li>
      <li>
        <Projeto titulo="Clone Disneyplus" descricao="Projeto clone da Disneyplus desenvolvido em javascript " link={"https://github.com/CursoFrontEndEbac/clone_disneyplus"} imagem={Disney}  />
      </li>
    </Lista>
  </section>
)

export default Projetos
