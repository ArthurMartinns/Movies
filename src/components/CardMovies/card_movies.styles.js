import styled from "styled-components";

export const Container = styled.div`
    padding: 3.2rem;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_INPUT};
    width: 100%;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: .8rem;
`

export const title = styled.div`
    color: ${({theme}) => theme.COLORS.WHITE};

    font-size: 1.8rem;
`
