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
`

export const right = styled.div`
    width: 100%;
    height: 100vh;

    background-image: url("movieImg.png");
`