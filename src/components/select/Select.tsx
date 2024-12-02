import React, {Dispatch, FC, RefObject, useRef} from 'react';
import {ItemType} from "../../App";
import styled, {css} from "styled-components";


type PropsType = {
    items: ItemType[],
    defaultId: string,
    onChange: Dispatch<React.SetStateAction<string>>,
};

export const Select: FC<PropsType> = ({items, defaultId, onChange}) => {

    const [isOpen, setOpen] = React.useState(false);

    const currentValueElement = useRef<HTMLDivElement>(null);

    const mappedItems = items.map(item => <ListItem key={item.id}
                                              onClick={() => {changeValueHandler(item.id)} }>{item.title}</ListItem>);

    const onClickHandler = () => {
       currentValueElement.current && currentValueElement.current.focus();
        setOpen(prev => !prev);
    };
    const changeValueHandler = (id: string) => {
        onChange(id);
        setOpen(false);
        currentValueElement.current &&  currentValueElement.current.blur()
    };
    const onBlurHandler = () => {

        setOpen(false);

    };
   const onFocusHandler = ()=>{

   };


    return (
        <SelectStyled>
            <SelectBody ref={currentValueElement} tabIndex={0} onBlur={onBlurHandler}>
                <CurrentValue   isOpen={isOpen}  onFocus={onFocusHandler} onClick={onClickHandler}>{items.find(item => item.id === defaultId)?.title}</CurrentValue>
                {isOpen && <List>{mappedItems}</List>}
            </SelectBody>
        </SelectStyled>
    );
};

const SelectStyled = styled.div`
    display: flex;///
    padding-top: 50px;///
    flex-direction: column;///
    align-items: center;///
   
        
`;
const CurrentValue = styled.span<{isOpen:boolean}>`
    border: 2px solid rgba(128, 128, 128, 0.5);
    color: rgba(128, 128, 128, 1);
    border-radius: 0.25rem;

    padding: 15px 10px 15px 10px;
    width: 100%;
    display: block;
    cursor: pointer;
    position: relative;
    transition: 0.15s;
    font-weight: 500;
    font-size: 18px;


    &:before {

        position: absolute;
        content: '';
        top: 52%;
        transition: inherit;
        right: 8px;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 6px solid gray;
        transform: translateY(-50%) rotate(0deg);
        ${props => props.isOpen && css<{ isOpen: boolean }>`
            transform: translateY(-50%) rotate(90deg);
        `}
    }

    &:after {
        content: 'items';
        position: absolute;
        background: white;
        padding: 2px;
        top: -6%;
        transition: inherit;
        left: 5px;
        transform: translateY(-50%);


    }

    &:hover {
        border-color: rgba(128, 128, 128, 1);
    }
`;
const SelectBody = styled.div`
    max-width: 120px;
    width: 100%;
    position: relative;
    &:focus{
        ${CurrentValue}{
            border-color: rgba(128, 128, 128, 1);
        }    
    }
    
    
`;

const List = styled.ul`
    
    position: absolute;
    top: 105%;
    color: green;
    background: white;
    margin: 0;
    padding: 0;
    list-style: none;
    border-radius: 0.25rem;
    overflow: hidden;
    width: 100%;
`;


const ListItem = styled.li`
    padding: 7.5px 45px 7.5px 10px;
    color: #333;
    font-size: 15px;
    font-weight: 500;
    width: 100%;
    cursor: pointer;
    &:hover {
        background: gray;
    }
`;

