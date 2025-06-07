import Flashcards from "./Flashcards";
import styled from "styled-components";

export default function Deck({ setRespondidas }) {
    return (
        <BodyDeck>  
            <Flashcards setRespondidas={setRespondidas} />
        </BodyDeck>
    );
}

const BodyDeck = styled.div`
    width: 330px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding-bottom: 120px;
`;
