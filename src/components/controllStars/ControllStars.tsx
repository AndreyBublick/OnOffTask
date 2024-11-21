

import React, {FC, useState} from 'react';
import styled from "styled-components";

type PropsType = {
    rating:number,
    setRating:(newRating:number)=>void,
}

export const ControllStars:FC<PropsType> = ({rating,setRating}) => {


    const [stars] = useState(['☆','☆','☆','☆','☆']);
    return (
        <Wrapper>
            <List>
                {stars.map((star,index)=> index < rating ? <li onClick={()=>{setRating(index+1)}} key={index}>{'★'}</li> : <li onClick={()=>{setRating(index+1)}} key={index}>{star}</li>)}
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