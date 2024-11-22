import React, {FC} from "react";
import styled from "styled-components";

type PropsType = {

    isActiveStar: boolean,
    onClick:()=>void

};
export const Star: FC<PropsType> = ({onClick , isActiveStar}) => {

    const onClickHandler = () => {
        onClick();
    };


    return <StarStyled onClick={onClickHandler}>{ isActiveStar ? '★':'☆'}</StarStyled>

};

const StarStyled = styled.li`
font-size: 3.5em;
    list-style: none;
`;
