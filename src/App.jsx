import TopoLogo from './componentes/TopoLogo';
import Deck from './componentes/Deck';
import AreaProgresso from './componentes/AreaProgresso';
import styled from 'styled-components';
import { useState } from 'react';
import CARTAS from './mock';

export default function App() {
  const [respondidas, setRespondidas] = useState(0);

  return (
    <Body>
      <TopoLogo />
      <Deck setRespondidas={setRespondidas} />
      <AreaProgresso respondidas={respondidas} total={CARTAS.length} />
    </Body> 
  );
}

const Body = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Recursive', sans-serif;
  padding-top: 40px;
  box-sizing: border-box;
  overflow-y: auto;
`;