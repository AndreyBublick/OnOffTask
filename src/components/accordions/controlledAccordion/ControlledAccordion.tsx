import React, {Dispatch, FC, useState} from 'react';
import styled from "styled-components";
import {ItemType} from "../../../App";


type PropsType = {
    title: string,
    items:ItemType[],
    onClick:()=>void,
    accordionCollapsed?:boolean;
    setAccordionCollapsed:Dispatch<React.SetStateAction<boolean>>,

};



export const ControlledAccordion:FC<PropsType> = ({title,items,onClick,setAccordionCollapsed,accordionCollapsed}) => {

    /*const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);*/

    const mapped = items.map((item: ItemType) => {
        return <li key={item.id} onClick={onClick}>{item.title}</li>;
    });



    const setAccordionCollapsedHandler = ()=>{
        setAccordionCollapsed(prev => !prev);
    };


    return <Wrapper>
        <h2 onClick={setAccordionCollapsedHandler}>{title}</h2>
        {accordionCollapsed && <List >
            {mapped}
        </List>}
    </Wrapper>
};


const Wrapper = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2{
        cursor: pointer;
    }
`;

const List = styled.ul`

li{cursor: pointer}
    
`;
