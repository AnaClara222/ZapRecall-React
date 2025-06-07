import styled from "styled-components";

export default function CardResposta({ resposta, aoFinalizar, clicavel }) {
  return (
    <RespostaCard>
      <p>{resposta}</p>
      <Botoes>
        <Botao $cor="#FF3030" onClick={() => aoFinalizar("naoLembrou")} disabled={clicavel}>Não lembrei</Botao>
        <Botao $cor="#FF922E" onClick={() => aoFinalizar("quaseLembrou")} disabled={clicavel}>Quase não lembrei</Botao>
        <Botao $cor="#2FBE34" onClick={() => aoFinalizar("zap")} disabled={clicavel}>Zap!</Botao>
      </Botoes>
    </RespostaCard>
  );
}

const RespostaCard = styled.div`
  width: 300px;
  min-height: 120px;
  background-color: #FFFFD4;
  border-radius: 5px;
  padding: 15px;
  box-shadow: 0px 4px 5px 0px #00000026;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    font-family: Recursive;
    color: #333333;
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

const Botoes = styled.div`
  display: flex;
  justify-content: space-between;
   font-family: Recursive;
`;

const Botao = styled.button`
  width: 85px;
  height: 37px;
  border: none;
  border-radius: 5px;
  background-color: ${props => props.$cor};
  color: white;
  font-weight: bold;
  font-family: Recursive;
  cursor: pointer;

  &:disabled {
    cursor: default;
    opacity: 0.6;
  }
`;
