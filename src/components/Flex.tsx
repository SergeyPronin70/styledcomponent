import React from 'react';
import styled from 'styled-components';

interface IFlex {
    direction?: string;
    align?: string;
    justify?: string;
    margin?: string;
    children?: React.ReactNode;
}

const StyledFlex = styled.div`
display: flex;
flex-direction: ${props => 
//@ts-ignore
    props.direction || 'row'};
align-items: ${props => 
//@ts-ignore
    props.align || 'stretch'};
justify-content: ${props => 
//@ts-ignore
    props.justify || 'stretch'};
margin: ${
//@ts-ignore
    ({margin}) => margin || '0'};
`

const Flex: React.FC<IFlex> = (props) => {
    return <StyledFlex {...props} />
}

export default Flex;