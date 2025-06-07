import styled from "styled-components";

export default function AreaProgresso({ respondidas, total }) {
  return (
    <Progresso>
      <p>{respondidas}/{total} CONCLUÍDOS</p>
    </Progresso>
  );
}

const Progresso = styled.footer`
  box-sizing: border-box;
  width: 100vw;
  height: 60px;
  padding: 20px;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px -4px 6px 0px #0000000d;
  text-align: center;

  p {
    font-family: Recursive;
    font-weight: 400;
    font-size: 18px;
    color: #333333;
  }
`;
