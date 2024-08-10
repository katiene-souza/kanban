import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.magenta};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Inter";
  width: 45rem;
  height: 100%;
  padding: 5rem 1rem;
  margin: 3rem auto;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSize.large};
  margin: 0;
  margin-bottom: 5rem;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  input {
    background-color: ${({ theme }) => theme.colors.lightMagenta};
    border-radius: ${({ theme }) => theme.borderRadius.xlarge};
    border: none;
    padding: 1.4rem 15rem 1.4rem 2rem;
  }

  label {
    color: ${({ theme }) => theme.colors.gray};
  }

  button {
    background-color: ${({ theme }) => theme.colors.lightMagenta};
    border-radius: ${({ theme }) => theme.borderRadius.xlarge};
    color: ${({ theme }) => theme.colors.darkBlue};
    font-size: ${({ theme }) => theme.fontSize.xmedium};
    cursor: pointer;
    border: none;
    padding: 1rem 15rem;
    margin: 1.5rem 0;
  }
`;

export const SignUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
`;

export const SignUpLink = styled.div`
  color: ${({ theme }) => theme.colors.darkBlue};

  #link {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.darkBlue};
    font-weight: bold;
  }
`;

export const OtherOption = styled.div`
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSize.medium};
`;
