import React from 'react';
import styled, {css, keyframes} from 'styled-components';

const rotateAnimation = keyframes`
0%{
    transform: rotateZ(0deg);
}
100%{
    transform: rotateZ(360deg);
}
`

interface IButton {
    children: React.ReactNode | string;
    align?: string;
    primary?: boolean;
    outlined?: boolean;
    color?: string;
    background?: string;
}

const StyledButton = styled.button.attrs(props => ({
    outlined: true,
}))`
border: none;
padding: 10px 15px;
font-size: 18px;
cursor: pointer;
&:focus {
    outline: none;
};
&:hover {
    animation: ${rotateAnimation} 1s infinite linear;
};
align-self: ${props => 
    //@ts-ignore
    props.align || 'stretch'};

${(props: any) => props.primary && css`
    color: ${(props: any) => props.color || 'white'};
    background: ${(props: any) => props.background || 'white'};
`};
${(props: any) => props.outlined && css`
    color: ${(props: any) => props.color || 'white'};
    border: 1px solid ${(props: any) => props.color || 'white'};
    background: transparent;
`};
`

const LargeButton = styled(StyledButton)`
font-size: 32px;
`

const Button: React.FC<IButton> = (props) => {
    return <StyledButton {...props} />
}

export default Button;