import styled from "styled-components";

export const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    height: 56px;

    padding: 0 16px;
    border-radius: 8px;

    background-color: ${({theme}) => theme.COLORS.PINK};
    color: ${({theme}) => theme.COLORS.BACKGROUND};
`