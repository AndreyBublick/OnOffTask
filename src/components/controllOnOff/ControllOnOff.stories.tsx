
import {UnControllStars} from "../unControllStars/UnControllStars";
import {ControllOnOff} from "./ControllOnOff";
import {useState} from "react";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Components/Controll OnOff',
    component: UnControllStars,


};


export const ControllOnOffDisable = ()=> <ControllOnOff isActive={false} setIsActive={action('change color and state')}  />;
export const ControllOnOffActive = ()=> <ControllOnOff isActive={true} setIsActive={action('change color and state')} />;
export const ControllOnOffChange = ()=> {
    const [isActive, setIsActive] = useState<boolean>(false);

    return <ControllOnOff isActive={isActive} setIsActive={setIsActive}/>;
}