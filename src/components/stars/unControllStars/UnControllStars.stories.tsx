import {UnControllStars} from "./UnControllStars";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Components/StarsRating/UnControllStars',
    component: UnControllStars,
};

const defaultChange = action('Change Quantity');
export const UnControllStarsChange = ()=> {



    return <>
        <div><b>I can change, click me</b></div>
        <UnControllStars/>
    </>
};
export const UnControllStarsWithQuantity1 = ()=> <UnControllStars defaultHowManyShowStars={1} defaultChange={defaultChange} />;
export const UnControllStarsWithQuantity2 = ()=> <UnControllStars defaultHowManyShowStars={2} defaultChange={defaultChange} />;
export const UnControllStarsWithQuantity3 = ()=> <UnControllStars defaultHowManyShowStars={3} defaultChange={defaultChange} />;
export const UnControllStarsWithQuantity4 = ()=> <UnControllStars defaultHowManyShowStars={4} defaultChange={defaultChange} />;
export const UnControllStarsWithQuantity5 = ()=> <UnControllStars defaultHowManyShowStars={5} defaultChange={defaultChange} />;