import React from 'react';
import styled from 'styled-components';

interface ILine {
    children: React.ReactNode;
    key: string | number;
    color?: string;

}

const StyledLine = styled.div`
font-size: 24px;
color: ${props => props.color || props.theme.colors.primary};
`

const Line: React.FC<ILine> = (props) => {
    return <StyledLine {...props} />
}

export default Line;