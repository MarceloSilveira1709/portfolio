import styled from "styled-components";

export const Card = styled.div`
.card-imagem {
  max-width: 100%;
  max-height: 480px;
  transition: transform 0.5s ease;
  cursor: pointer;
  margin-bottom: 5px;
}

.card-imagem.zoomed {
  transform: scale(2);
  position: relative;
  z-index: 10;
}`
export const LinkBotao = styled.a`
  color:${(props)=> props.theme.corDeFundo};
  font-size:14px;
  background-color: ${(props) => props.theme.corDeFundobotao};
  text-decoration: none;
  padding: 8px;
  display:inline-block;
  margin-top: 18px;
  border-radius: 15px;
  `
