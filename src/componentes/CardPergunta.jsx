import styled from "styled-components";
import virar from "../assets/seta_virar.png"; 

export default function CardPergunta({ pergunta, aoVirar }) {
  return (
    <PerguntaCard>
      <p>{pergunta}</p>
      <img src={virar} alt="Virar" onClick={aoVirar} />
    </PerguntaCard>
  );
}

const PerguntaCard = styled.div`
  width: 300px;
  min-height: 100px;
  background-color: #FFFFD4;
  border-radius: 5px;
  padding: 15px;
  position: relative;
  box-shadow: 0px 4px 5px 0px #00000026;

  p {
    font-family: Recursive;
    font-weight: 400;
    color: #333333;
    font-size: 18px;
  }

  img {
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 20px;
    cursor: pointer;
  }
`;

