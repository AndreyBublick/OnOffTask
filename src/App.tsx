import './App.css';
import styled from 'styled-components';
import {OnOff} from "./components/onOff/OnOff";
import {UnControlledAccordion} from "./components/unControlledAccordion/UnControlledAccordion";
import {UnControllStars} from "./components/unControllStars/UnControllStars";
import {ControlledAccordion} from "./components/controlledAccordion/ControlledAccordion";
import {useState} from "react";




function App() {

    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);

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
            <ControlledAccordion title={'ControlledAccordion №1'} accordionCollapsed={accordionCollapsed} setAccordionCollapsed={ ()=>{setAccordionCollapsed(prev=>!prev)} }  />
        </div>
    );
}

export default App;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;