import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
    padding: 0 12.3rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 3.0rem;

    height: 11.6rem;
`

export const Title = styled.div`
    color: ${({theme}) => theme.COLORS.PINK};
    font-size: 1.6rem;
    font-weight: bold;
`

export const Profile = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: .6rem;
`

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;

    > p {
        color: ${({theme}) => theme.COLORS.WHITE};
    }

`

export const Right = styled.div`
    background-color: ${({theme}) => theme.COLORS.WHITE};

    width: 3.0rem;
    height: 3.0rem;

    border-radius: 5.0rem;
`