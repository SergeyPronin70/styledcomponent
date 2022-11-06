import React, { useState } from 'react';
import styled from 'styled-components';
import Flex from './Flex';
import Line from './Line';

interface IConsole {
    color?: string;
}

const StyledConsole = styled.textarea`
width: 100%;
height: 70vh;
background: black;
border: none;
font-size: 24px;
resize: none;
color: ${props => props.color || props.theme.colors.primary};
&:focus {
    outline: none;
};
@media ${props => props.theme.media.phone} {
    border: 1px solid red;
};
@media ${props => props.theme.media.tablet} {
    border: 1px solid green;
};
`

const Console: React.FC<IConsole> = ({color, ...props}) => {
    const [lines, setLines] = useState(['C/users/subracadabra>']);

    const onKeyPress = (e: KeyboardEvent) => {
        if (e.charCode == 13) {
            setLines([...lines, 'C/users/subracadabra>'])
        }
    }
    return (
        <Flex>
            <Flex direction={'column'} margin='0 10px'>
                {lines.map(line => 
                    <Line color={color} key={line}>{line}</Line>    
                )}
            </Flex>
            <StyledConsole 
            //@ts-ignore
            onKeyPress={onKeyPress} color={color} {...props} />
        </Flex>
    )
}

export default Console;