import React, { useState } from 'react';
import Paragrafo from "../Paragrafo";
import { Card, LinkBotao } from './styles';


type Props = {
  titulo: string;
  descricao: string;
  link: string;
  imagem: string;
};

const Projeto = ({ titulo, descricao, link, imagem }: Props) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed); {/*atualiza o estado */}
  };

  return (
    <Card>
      <div className="image-container">
        <img
          src={imagem}
          alt={titulo}
          className={`card-imagem ${isZoomed ? 'zoomed' : ''}`}
          title={isZoomed ? "Clique para fechar a imagem" : "Clique para ampliar a imagem"}
          onClick={toggleZoom}
        />
      </div>
      <Paragrafo tipo="secundario">{descricao}</Paragrafo>
      <LinkBotao href={link} target="_blank">Visitar</LinkBotao>
    </Card>
  );
};

export default Projeto;
