import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #000;
`   

export const wrapper = styled.div`
    height:100vh;
    display: flex;
    flex-direction: row;
`

export const left = styled.div`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};

    display: flex;
    align-items: center;
    justify-content: center;
`

export const right = styled.div`
    width: 100%;
    height: 100vh;

    background-image: url("movieImg.png");
`

export const Content = styled.div`
    width: 100%;
    max-width: 34rem;
    

    display: flex;
    flex-direction: column;
    gap: 3.0rem;
`

export const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    gap: .8rem;

    :last-child {
        margin-top: 1.0rem;
    }
`


export const Label = styled.label`
    color: ${({theme}) => theme.COLORS.WHITE};
    margin-bottom: 8.0rem;
    font-size: 1.8rem;
`

export const Top = styled.div`
    display: flex;
    flex-direction: column;
    gap: .6rem;
`


export const Title = styled.h1`
    font-size: 4.8rem;
    color: ${({theme}) => theme.COLORS.PINK};
`


export const SubTitle = styled.p`
    font-size: 1.4rem;
    color: ${({theme}) => theme.COLORS.GRAY_CLARO};

`