import {FC} from "react";
import styled, {css} from "styled-components";
import {ColorBGType} from "../ControllOnOff";



type PropsType ={
    title: string,
    onClick: ()=>void,
    active?:boolean,
    colorBG:ColorBGType,

};
type ButtonPropsType ={
    colorBG?:string,
    active?:boolean,
};
export const OnOffButton:FC<PropsType> = ({title,onClick,active,colorBG,}) => {


    return <Button colorBG={colorBG} active={active} onClick={ onClick}>{title}</Button>
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
        
        color: white;
    `};
    background-color: ${props=> props.active&&props.colorBG};
`;