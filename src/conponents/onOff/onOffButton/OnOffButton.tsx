import {FC} from "react";
import styled, {css} from "styled-components";
import {ColorBGType} from "../OnOff";



type PropsType ={
    title: string,
    onClick: ()=>void,
    active?:boolean,
    colorBG:ColorBGType,
    changeColorBG:(colorBG:ColorBGType)=>void,
};
type ButtonPropsType ={
    colorBG?:string,
    active?:boolean,
};
export const OnOffButton:FC<PropsType> = ({title,onClick,active,colorBG,changeColorBG,}) => {
    return <Button colorBG={colorBG} active={active} onClick={ ()=>{onClick();changeColorBG(colorBG)}}>{title}</Button>
};

const Button = styled.div<ButtonPropsType>`
   /* background-color: red;*/
    cursor: pointer;
    width: 100px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.2s,color 0.2s;
    
    &:hover {
        background-color: ${props =>  props.colorBG};
color: white;
    };
    ${props => props.active && css<ButtonPropsType>`
        background-color: ${props.colorBG};
        color: white;
    `};
`;