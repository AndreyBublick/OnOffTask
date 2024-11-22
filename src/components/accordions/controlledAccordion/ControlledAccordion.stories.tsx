import {ControlledAccordion} from "./ControlledAccordion";
import {action} from "@storybook/addon-actions";
import {useState} from "react";


export default {
    title: 'Components/Accordions/Controll Accordion',
    component: ControlledAccordion,
};
const callBack = ()=> action('change accordion open/close')();


export const ControlledAccordionTestClose = () => <ControlledAccordion title={'Controll Accordion Close'} accordionCollapsed={false} setAccordionCollapsed={ ()=>callBack()}  />;



export const ControlledAccordionTestOpen = () => <ControlledAccordion title={'Controll Accordion Open'} accordionCollapsed={true} setAccordionCollapsed={()=>callBack()}  />;
export const ControlledAccordionTestChange = () => {
    const [isOpen, setOpen] = useState(false);
    return <ControlledAccordion title={'Controll Accordion Change'} accordionCollapsed={isOpen} setAccordionCollapsed={()=> setOpen(prev=>!prev)}  />};