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
    max-width: 340px;
    

    display: flex;
    flex-direction: column;
    gap: 30px;
`

export const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    gap: 8px;

    :last-child {
        margin-top: 10px;
    }
`


export const Label = styled.label`
    color: ${({theme}) => theme.COLORS.WHITE};
    margin-bottom: 8px;
    font-size: 18px;
`

export const Top = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`


export const Title = styled.h1`
    font-size: 48px;
    color: ${({theme}) => theme.COLORS.PINK};
`


export const SubTitle = styled.p`
    font-size: 14px;
    color: ${({theme}) => theme.COLORS.GRAY_CLARO};

`