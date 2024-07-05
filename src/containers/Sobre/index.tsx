import Titulo from "../../components/Titulo";
import Paragrafo from "../../components/Paragrafo";
import { GithubSecao } from "./styles";
import GitHub from "../../components/assets/images/GitHub_Logo.png"

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
    Meu nome é Marcelo, tenho 38 anos e estou focado no estudo e desenvolvimento na área de front-end. Minhas habilidades principais incluem JavaScript, TypeScript, HTML e CSS.
    Atualmente, estou aprimorando meu conhecimento em frameworks como React e Redux, explorando a estilização com Styled-Components
    para criar componentes estilizados de forma dinâmica e eficiente.
    </Paragrafo>
    <GithubSecao>
    <img className="git" src={GitHub}/>
    <img  src="https://github-readme-stats.vercel.app/api/top-langs/?username=MarceloSilveira1709&layout=compact&langs_count=7&theme=dracula"/>
    </GithubSecao>
  </section>
)

export default Sobre
