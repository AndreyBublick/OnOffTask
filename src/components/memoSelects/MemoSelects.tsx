import {FC, useMemo, useState} from 'react';

import {FormControl} from "@mui/material";
import {MemoSelect} from "./memoSelect/MemoSelect";
import {v1} from "uuid";
import styled from "styled-components";

export type CountryType = {
    id:string,
    title:string,
    people:number,
};


export const MemoSelects:FC = () => {

    const ID1 = v1();
    const ID2 = v1();
    const ID3 = v1();

    const [countries, setCountries] = useState<CountryType[]>([
        {id:ID1,title:'Россия',people:143000000,},
        {id:ID2,title:'Украина',people:200000,},
        {id:ID3,title:'Китай',people:99999999,},
    ]);
    const [counter,setCounter] = useState(0);

    const [cities, setCities] = useState({
        [ID1]:['Краснодар','Кучугуры','Горячий-ключ',],
        [ID2]:['Киев','Херсон','Днепр','MASTER',],
        [ID3]:['Шанхай','Пекин','Чэнду',],
    });


    const filteredItemsByLetter = useMemo(()=>{

        return countries.reduce((acc:string[],item:CountryType)=>{
            cities[item.id].forEach(i=>i.toLowerCase().includes('а') && acc.push(i));
            return acc;

        },[]);

    },[countries,cities]);

    const filteredCitiesForCountry = useMemo(()=>{

        return cities[countries[0].id];
        },[cities,countries]);

    const filteredCountryByPeopleMore10Million = useMemo(()=>{

        return countries.filter(c=>c.people>=10000000).map(c=>c.title);

    },[countries]);



    return (
        <FormControlWrapper>
            <span>{counter}</span>
            <button onClick={() => setCounter(prev => ++prev)}>asd</button>

            <FormControl sx={{minWidth: 120}}>
                <MemoSelect items={filteredItemsByLetter} title={'letter a'}/>

            </FormControl>
            <FormControl sx={{minWidth: 120}}>
                <MemoSelect items={filteredCitiesForCountry} title={'cities'}/>

            </FormControl>
            <FormControl sx={{minWidth: 120}}>
                <MemoSelect items={filteredCountryByPeopleMore10Million} title={'more 10'}/>
                {/*<MemoSelect title={'Cities'} />
                <MemoSelect  title={'more 10 million'} />*/}
            </FormControl>
        </FormControlWrapper>
    );
};

const FormControlWrapper = styled.div`
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
    justify-content: center;
`;