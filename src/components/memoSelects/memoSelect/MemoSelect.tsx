import React, {FC, memo, useEffect, useState} from 'react';
import {InputLabel, NativeSelect} from "@mui/material";


type PropsType = {
    items:string[],
    title: string,
};

export const MemoSelect:FC<PropsType> = memo(({title,items}) => {
debugger
    const [value,setValue] = useState(items[0]);
    const mapedItems = items.map(item => <option key={item} value={item} >{item}</option>);



    return <>
        <InputLabel  variant="standard" htmlFor={title}>
            {title}
        </InputLabel>
        <NativeSelect onChange={e => setValue(e.currentTarget.value)}
            defaultValue={value}
            inputProps={{
                name: title,
                id: title,
            }}>
            {mapedItems}
        </NativeSelect>
    </>
});

