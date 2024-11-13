import React, {useState} from 'react';
import styled from "styled-components";

export const UnControllStars = () => {

    const [howManyShowStars,setHowManyShowStars] = useState(3);
    const [stars] = useState(['☆','☆','☆','☆','☆']);
    return (
        <Wrapper>
            <List>
                {stars.map((star,index)=> index < howManyShowStars ? <li onClick={()=>{setHowManyShowStars(index+1)}} key={index}>{'★'}</li> : <li onClick={()=>{setHowManyShowStars(index+1)}} key={index}>{star}</li>)}
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