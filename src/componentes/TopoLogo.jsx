import logo from '../assets/logo.png'; 
import styled from 'styled-components';

export default function TopoLogo() {
    return(
        <Topo>
            <img src={logo} alt="ZapRecall Logo" />
            <h1>ZapRecall</h1>
        </Topo>
    )
}

const Topo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 51px;
    justify-content: center;

    img {
    width: 52px;
    height: 60px;
    margin-right: 18px;
    }

    h1 {
    font-family: 'Righteous', cursive;
    font-size: 36px;
    font-weight: 400; 
    color: #FFFFFF;
    }
`
