import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    width: 100%;
    border: 0;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_INPUT};
    
    border-radius: 6px;
    padding: 12px;
    
    &:placeholder {
        color: ${({theme}) => theme.COLORS.GRAY};
    }
    
    input {
        width: 100%;
        background: transparent;
        border: none;
        color: ${({theme}) => theme.COLORS.GRAY};
    }
    color: ${({theme}) => theme.COLORS.GRAY};
    

    svg {
        margin-left: left;
    }
`