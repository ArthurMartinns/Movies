import styled from "styled-components";

export const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    height: 5.6rem;

    padding: 0 1.6rem;
    border-radius: .8rem;

    background-color: ${({theme}) => theme.COLORS.PINK};
    color: ${({theme}) => theme.COLORS.BACKGROUND};
`