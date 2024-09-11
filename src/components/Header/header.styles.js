import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
    padding: 0 123px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 30px;

    height: 116px;
`

export const Title = styled.div`
    color: ${({theme}) => theme.COLORS.PINK};
    font-size: 16px;
    font-weight: bold;
`

export const Profile = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6px;
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

    width: 30px;
    height: 30px;

    border-radius: 50px;
`