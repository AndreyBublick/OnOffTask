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
import {Select} from "./components/select/Select";
import {MemoSelects} from "./components/memoSelects/MemoSelects";

export type ItemType = {
    id: string,
    title: string,
};

function App() {


    const id1 = v1();
    const id2 = v1();



    const [isActive, setIsActive] = useState<boolean>(false);
    const [isActiveForOnOff, setIsActiveForOnOff] = useState<boolean>(false);
    const [rating, setRating] = useState<number>(3);
    const [items, setItems] = useState<ItemType[]>([{id: id1, title: 'item asd asd asd asd asd 1'}, {id: id2, title: 'item2'}]);
    const [selectedItemId, setSelectedItemId] = useState(id1);


    const setNewRating = useCallback((newRating: number) => {
        setRating(newRating);
    }, []);


    return (
        <div className="App">
            <MemoSelects />
            <Select items={items} defaultId={selectedItemId} onChange={setSelectedItemId} />
            <Title>Buttons</Title>
            <UnControllOnOff/>
            <UnControllOnOff/>

            <ControllOnOff isActive={isActiveForOnOff} setIsActive={setIsActiveForOnOff}/>


            <UnControlledAccordion title={'test1'}/>
            <UnControlledAccordion title={'test2'}/>
            <UnControllStars/>
            <ControllStars rating={rating} setRating={setNewRating}/>
            <ControlledAccordion title={'ControlledAccordion №1'} accordionCollapsed={isActive} items={items} onClick={() => {console.log(123)}} setAccordionCollapsed={setIsActive}/>
        </div>
    );
}

export default App;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;