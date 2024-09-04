import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
`

export const wrapper = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: row;

`

export const left = styled.div`
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
    width: 100%;


    display: flex;
    align-items: center;
    justify-content: center;
`

export const right = styled.div`
    background-image: url("movieImg.png");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
`

export const content = styled.div`
    border: 2px solid #212;
    max-width: 340px;

    display: flex;
    flex-direction: column;
    gap: 48px;
`

export const top = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    h1 { 
        color: ${({theme}) => theme.COLORS.PINK};
        font-size: 48px;
    }

    P {
        color: ${({theme}) => theme.COLORS.GRAY_CLARO};
        font-size: 14px;
    }
`

export const form = styled.div`


`