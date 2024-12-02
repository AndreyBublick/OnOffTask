import {UnControllOnOff} from "../onOff/unControllOnOff/UnControllOnOff";
import {Select} from "./Select";
import {v1} from "uuid";
import {useState} from "react";
import {ItemType} from "../../App";
import {action} from "@storybook/addon-actions";


export default {
    title: "Components/select",
    component: Select,
};
export const SelectDefaultId1 = ()=> {
    const id1 = v1();
    const id2 = v1();
    const [items, setItems] = useState<ItemType[]>([{id: id1, title: 'item1'}, {id: id2, title: 'item2'}]);
    return <Select defaultId={id1} items={items} onChange={action('selectedId')} />
};
export const SelectDefaultId2 = ()=> {
    const id1 = v1();
    const id2 = v1();
    const [items, setItems] = useState<ItemType[]>([{id: id1, title: 'item1'}, {id: id2, title: 'item2'}]);
    return <Select defaultId={id2} items={items} onChange={action('selectedId')} />
};
export const SelectChangeSelectedId = ()=> {
    const id1 = v1();
    const id2 = v1();
    const [selectedItemId, setSelectedItemId] = useState(id1);
    const [items, setItems] = useState<ItemType[]>([{id: id1, title: 'item1'}, {id: id2, title: 'item2'}]);
    return <Select defaultId={selectedItemId} items={items} onChange={setSelectedItemId} />
};