import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .6rem;
    width: 100%;
    height: 4.0rem;
    border: 0;
    
    color: ${({theme}) => theme.COLORS.GRAY};
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_INPUT};
    
    border-radius: .6rem;
    padding: 1.2rem;
    
    &:placeholder {
        color: ${({theme}) => theme.COLORS.GRAY};
    }
    
    input {
        height: 4.0rem;
        width: 100%;
        background: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        color: ${({theme}) => theme.COLORS.GRAY};
    }
    

`