import {ControlledAccordion} from "./ControlledAccordion";
import {action} from "@storybook/addon-actions";
import {useState} from "react";
import {v1} from "uuid";



export default {
    title: 'Components/Accordions/Controll Accordion',
    component: ControlledAccordion,
};
const callBack = ()=> action('change accordion open/close')();
const callBackOnClick = ()=> action('click by li')();


export const ControlledAccordionTestClose = () => <ControlledAccordion onClick={callBackOnClick} items={[{id:v1(),title:'1'},{id:v1(),title:'2'}]} title={'Controll Accordion Close'} accordionCollapsed={false} setAccordionCollapsed={ ()=>callBack()}  />;



export const ControlledAccordionTestOpen = () => <ControlledAccordion onClick={callBackOnClick} items={[{id:v1(),title:'1'},{id:v1(),title:'2'}]} title={'Controll Accordion Open'} accordionCollapsed={true} setAccordionCollapsed={()=>callBack()}  />;
export const ControlledAccordionTestChange = () => {
    const [isOpen, setOpen] = useState(false);

    return <ControlledAccordion title={'Controll Accordion Change'} items={[{id:v1(),title:'1'},{id:v1(),title:'2'}]} onClick={callBackOnClick} accordionCollapsed={isOpen} setAccordionCollapsed={()=> setOpen(prev=>!prev)}  />};