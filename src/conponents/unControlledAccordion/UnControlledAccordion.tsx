import React, {FC} from 'react';
import styled from "styled-components";
type PropsType = {
    title: string;
};

export const UnControlledAccordion:FC<PropsType> = ({title}) => {

    const [isOpen, setIsOpen] = React.useState(false);


    return  <Wrapper>
          <h2>{title}</h2>
        <button onClick={()=>{setIsOpen(prev => !prev)}}>change</button>
        <List isOpen={isOpen}>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </List>
    </Wrapper>
};

const Wrapper = styled.div`
margin-top: 50px;
    display: flex;
    flex-direction: column;
align-items: center;    
`;

const List = styled.ul<{isOpen:boolean}>`

   display: ${props => props.isOpen ? 'block' : 'none' };
`;