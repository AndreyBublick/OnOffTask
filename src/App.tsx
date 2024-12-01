import './App.css';
import styled from 'styled-components';
import {UnControllOnOff} from "./components/onOff/unControllOnOff/UnControllOnOff";
import {UnControlledAccordion} from "./components/accordions/unControlledAccordion/UnControlledAccordion";
import {UnControllStars} from "./components/stars/unControllStars/UnControllStars";
import {ControlledAccordion} from "./components/accordions/controlledAccordion/ControlledAccordion";
import {useCallback, useState} from "react";

import {ControllStars} from "./components/stars/controllStars/ControllStars";
import {ControllOnOff} from "./components/onOff/controllOnOff/ControllOnOff";
import {v1} from "uuid";

export type ItemType = {
    id:string,
    title:string,
};

function App() {



    const [isActive, setIsActive] = useState<boolean>(false);
    const [rating,setRating] = useState<number>(3);
    const [items,setItems] = useState<ItemType[]>([{id:v1(),title:'1'},{id:v1(),title:'2'}]);


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
            <ControlledAccordion title={'ControlledAccordion №1'} items={items} onClick={()=>{}} setAccordionCollapsed={setIsActive}/>
        </div>
    );
}

export default App;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;