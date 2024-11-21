import './App.css';
import styled from 'styled-components';
import {UnControllOnOff} from "./components/unControllOnOff/UnControllOnOff";
import {UnControlledAccordion} from "./components/unControlledAccordion/UnControlledAccordion";
import {UnControllStars} from "./components/unControllStars/UnControllStars";
import {ControlledAccordion} from "./components/controlledAccordion/ControlledAccordion";
import {useCallback, useState} from "react";
import {ControllOnOff} from "./components/controllOnOff/ControllOnOff";
import {ControllStars} from "./components/controllStars/ControllStars";


function App() {

    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);
    const [isActive, setIsActive] = useState<boolean>(false);
    const [rating,setRating] = useState<number>(3);

    const setNewRating = useCallback((newRating:number) => {
       setRating(newRating);
    },[]);

    return (
        <div className="App">
            <Title>Buttons</Title>
           <UnControllOnOff/>
            <UnControllOnOff/>

            <ControllOnOff isActive={isActive} setIsActive={setIsActive}/>


            <UnControlledAccordion title={'test1'}/>
            <UnControlledAccordion title={'test2'}/>
            <UnControllStars/>
            <ControllStars rating={rating} setRating={setNewRating}/>
            <ControlledAccordion title={'ControlledAccordion №1'} accordionCollapsed={accordionCollapsed}
                                 setAccordionCollapsed={() => {
                                     setAccordionCollapsed(prev => !prev)
                                 }}/>
        </div>
    );
}

export default App;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;