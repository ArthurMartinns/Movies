import styled from "styled-components";

export const Container = styled.div`
    padding: 5px 14px;
    border-radius: 6px;
    font-size: 12px;

    background-color: ${({theme}) => theme.COLORS.GRAY};
    color: ${({theme}) => theme.COLORS.GRAY_CLARO};
`