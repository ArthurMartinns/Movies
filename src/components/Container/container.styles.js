import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const Container = styled.div`
    width: 100%;
    max-width: 121.6rem;


    @media (max-width: ${breakpoints.mobileSmall}) {
        max-width: 31.5rem;
    }

    @media (max-width: ${breakpoints.mobileLarge}) {
        max-width: 52.5rem;
    }

    @media (max-width: ${breakpoints.tablet}) {
        max-width: 86.8rem;
    }

    @media (max-width: ${breakpoints.desktopSmall}) {
        max-width: 121.6rem;
    }

    @media (max-width: ${breakpoints.desktopLarge}) {
        max-width: 154.8rem;
    }
`