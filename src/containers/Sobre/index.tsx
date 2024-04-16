import Titulo from "../../components/Titulo";
import Paragrafo from "../../components/Paragrafo";
import { GithubSecao } from "./styles";

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Paragrafo tipo="principal">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid repellat quas nobis blanditiis
      animi ut minus ad, possimus exercitationem
      explicabo modi id. Explicabo recusandae quas, mollitia minima officia exercitationem sunt?
    </Paragrafo>
    <GithubSecao>
    <img  src="https://github-readme-stats.vercel.app/api?username=MarceloSilveira1709&show_icons=true&theme=dracula&include_all_commits=true&count_private=false"/>
    <img  src="https://github-readme-stats.vercel.app/api/top-langs/?username=MarceloSilveira1709&layout=compact&langs_count=7&theme=dracula"/>
    </GithubSecao>
  </section>
)

export default Sobre
