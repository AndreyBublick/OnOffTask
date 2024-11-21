import styled from "styled-components";
import {FC, useCallback, useState} from "react";
import {OnOffButton} from "./onOffButton/OnOffButton";

export type ColorBGType = 'red'|'green'|'blue';
type CirclePropsType = {
    condition: boolean;
    colorBG: ColorBGType;

};




export const UnControllOnOff: FC = () => {
    const [condition, setCondition] = useState(true);
    const [colorBG,setColorBG] = useState<ColorBGType>('red');

    const changeColorBG = useCallback((colorBG:ColorBGType)=>{
        setColorBG(colorBG);
    },[]);



    return <Wrapper>
        {<OnOffButton title={'on'} changeColorBG={changeColorBG} colorBG = {'green'} active = {!condition} onClick={() => setCondition(false)} /> }
        {<OnOffButton title={'off'} changeColorBG={changeColorBG} colorBG = {'red'} active = {condition} onClick={() => setCondition(true)} /> }
        <Circle colorBG={colorBG} condition={condition} />
    </Wrapper>

};









///////////////////////////////////////////////////////////css
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;



const Circle = styled.div<CirclePropsType>`
    width: 100px;
    height: 100px;
    /*background-color: darkslategrey;*/

   
        background-color: ${props=>props.colorBG};
  
`;

