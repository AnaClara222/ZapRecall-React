import styled from "styled-components";
import play from "../assets/seta_play.png";
import certo from "../assets/icone_certo.png";
import erro from "../assets/icone_erro.png";
import quase from "../assets/icone_quase.png";

export default function CardFrente({ numero, aoClicar, concluida, corTexto, resultado }) {
  let icone;

  if (resultado === "zap") icone = certo;
  else if (resultado === "naoLembrou") icone = erro;
  else if (resultado === "quaseLembrou") icone = quase;
  else icone = play;

  return (
    <Flashcard onClick={aoClicar}>
      <p
        style={{
          textDecoration: concluida ? "line-through" : "none",
          color: corTexto || "#333",
        }}
      >
    {numero}
      </p>
      <img src={icone} alt="ícone" />
    </Flashcard>
  );
}

const Flashcard = styled.div`
  width: 300px;
  height: 65px;
  border-radius: 5px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  box-shadow: 0px 4px 5px 0px #00000026;

  p {
    font-family: Recursive;
    font-weight: 700;
  }

  img {
    cursor: pointer;
    width: 20px;
  }
`;

