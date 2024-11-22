import {ControllStars} from "./ControllStars";
import {useState} from "react";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Components/StarsRating/Controll Stars',
    component: ControllStars,
};



export const Rating0 = () => <ControllStars rating={0} setRating={action('change rating value on')}/>;
export const Rating1 = () => <ControllStars rating={1} setRating={action('change rating value on')}/>;
export const Rating2 = () => <ControllStars rating={2} setRating={action('change rating value on')}/>;
export const Rating3 = () => <ControllStars rating={3} setRating={action('change rating value on')}/>;
export const Rating4 = () => <ControllStars rating={4} setRating={action('change rating value on')}/>;
export const Rating5 = () => <ControllStars rating={5} setRating={action('change rating value on')}/>;

export const RatingWithHandlerOnClick = () => {

    const [rating, setRating] = useState(0);
    return <>
        <div style={{textAlign: 'center'}}><b>Click me</b></div>
        <ControllStars rating={rating} setRating={setRating}/></>
}


/* "eslint": "^7.32.0",*/