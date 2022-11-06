import React from 'react';
import styled from 'styled-components';

interface ITitle {
    children: React.ReactNode;
    color?: string;
}

const StyledTitle = styled.h1`
color: ${props => props.color || props.theme.colors.primary};
`

const Title: React.FC<ITitle> = (props) => {
    return <StyledTitle {...props} />
        
};

export default Title;