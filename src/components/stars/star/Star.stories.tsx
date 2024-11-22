import {Star} from "./Star";
import {action} from "@storybook/addon-actions";


export default {
    title: "Components/StarsRating/Star",
component: Star,
};

export const StarActive = ()=> <Star isActiveStar={true} onClick={action('clicked')} />;
export const StarOff = ()=> <Star isActiveStar={false} onClick={action('clicked')} />;
