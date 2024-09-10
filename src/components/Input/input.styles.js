import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    width: 100%;
    height: 40px;
    border: 0;
    
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_INPUT};
    
    border-radius: 6px;
    padding: 12px;
    
    &:placeholder {
        color: ${({theme}) => theme.COLORS.GRAY};
    }
    
    input {
        height: 40px;
        width: 100%;
        background: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        color: ${({theme}) => theme.COLORS.GRAY};
    }
    color: ${({theme}) => theme.COLORS.GRAY};
    

`