import './App.css';
import styled from 'styled-components';
import {OnOff} from "./conponents/onOff/OnOff";
import {UnControlledAccordion} from "./conponents/unControlledAccordion/UnControlledAccordion";
import {UnControllStars} from "./conponents/unControllStars/UnControllStars";




function App() {
    return (
        <div className="App">
            <Title>Buttons</Title>
           <OnOff   />
           <OnOff   />
           <OnOff   />
           <OnOff   />
            <UnControlledAccordion title={'test1'}/>
            <UnControlledAccordion title={'test2'}/>
            <UnControllStars />
        </div>
    );
}

export default App;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;