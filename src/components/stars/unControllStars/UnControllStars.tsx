import React, {FC, useState} from 'react';
import styled from "styled-components";
import {Star} from "../star/Star";

type PropsType = {
    defaultHowManyShowStars?: 1|2|3|4|5;
    defaultChange?: (value:number)=>void;
};

export const UnControllStars:FC<PropsType> = ({defaultHowManyShowStars,defaultChange}) => {

    const [howManyShowStars,setHowManyShowStars] = useState<1|2|3|4|5>( defaultHowManyShowStars ? defaultHowManyShowStars : 3);
    const [stars] = useState(['☆','☆','☆','☆','☆']);
    return (
        <Wrapper>
            <List>
                {stars.map((star,index)=> <Star key={index} isActiveStar={index < howManyShowStars} onClick={()=>{ defaultChange ? defaultChange(index+1):setHowManyShowStars(index+1 as 1|2|3|4|5)}} />)}
                {/*<li onClick={()=>{setHowManyShowStars(index+1)}} key={index}>{star}</li>*/}
            </List>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;
const List = styled.ul`
    padding: 0;

    display: flex;
li{
    list-style: none;
    cursor: pointer;
    font-size: 60px;
}
`;