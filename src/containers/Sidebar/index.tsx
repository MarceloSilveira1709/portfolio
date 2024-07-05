import Avatar from "../../components/Avatar"
import Titulo from "../../components/Titulo"
import Linkedin from "../../components/assets/images/linkedin-48.png"
import Git from "../../components/assets/images/github-30.png"

import { Descricao, BotaoTema , SidebarContainer} from "./styles"

type Props = {
  trocaTema: () => void;
}

const Sidebar = (props:Props) => (
  <aside>
    <SidebarContainer>
    <Avatar/>
    <Titulo fontSize={20}>Marcelo Silveira</Titulo>
    <a href="https://www.linkedin.com/in/marcelosilveira-/" target="_blank">
      <img className="linkedin" src={Linkedin} />
    </a>
    <a href="https://github.com/MarceloSilveira1709" target="_blank">
      <img className="git" src={Git} />
    </a>
    <Descricao tipo="principal" fontSize={12}>Desenvolvedor Front-End</Descricao>
    <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
