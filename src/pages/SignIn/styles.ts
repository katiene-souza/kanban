import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.magenta};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Inter';
  width: 35%;
  height: 100%;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSize.large};
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  input {
    background-color: ${({ theme }) => theme.colors.width};
    border-radius: ${({ theme }) => theme.borderRadius.xlarge};
    border: none;
    padding: 1rem 15rem 1rem 2rem;
  }

  label {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const SignUpLink = styled.div``;
