import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

export const Error = styled.div`
    color:  ${({ theme }) => theme.colors.lightRed};
    margin: 0.5rem 0 0 1rem;
`