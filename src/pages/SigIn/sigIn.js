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
    border: .2rem solid #212;
    max-width: 34.0rem;

    display: flex;
    flex-direction: column;
    gap: 4.8rem;
`

export const top = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;

    h1 { 
        color: ${({theme}) => theme.COLORS.PINK};
        font-size: 4.8rem;
    }

    P {
        color: ${({theme}) => theme.COLORS.GRAY_CLARO};
        font-size: 1.4rem;
    }
`
export const form = styled.div`
    width: 100%;
    max-width: 34.0rem;

    display: flex;
    flex-direction: column;
    gap: 3.0rem;

    h3 {
        font-size: 2.4rem;
        font-weight: 400;
        color: ${({theme}) => theme.COLORS.WHITE};
    }

    form {
        display: flex;
        flex-direction: column;
        gap: .8rem;
    }
`