import './App.css';
import styled from 'styled-components';
import {OnOff} from "./conponents/onOff/OnOff";




function App() {
    return (
        <div className="App">
            <Title>Buttons</Title>
           <OnOff colorBG={'red'}  />
        </div>
    );
}

export default App;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;