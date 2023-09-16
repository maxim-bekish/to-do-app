import styled from "styled-components";

export const InsertRow = styled("div")`
  max-height: 100%;
  display: flex;
  gap: 10px;
  flex-direction: column;
  max-width: 12.5rem;
  border-radius: 0.25rem;
  padding: 0.4375rem;

  border: 0.0625rem solid ${({ theme }) => theme.button};
  h1 {
    display: flex;
    width: 4.1875rem;
    background-color: ${({ theme }) => theme.background};
    margin: 0;
    font-size: 0.8125rem;
    line-height: 100%;
    font-weight: 300;
    margin-top: -0.9375rem;
    justify-content: center;
  }

  input {
    color: ${({ theme }) => theme.white};
    max-width: 100%;
    &:focus {
      border: 0.125rem solid ${({ theme }) => theme.green};
    }
 
    outline: none;
    padding: 0.3125rem;
    &::placeholder {
      color: ${({ theme }) => theme.button};
      font-family: "Roboto", sans-serif;
      font-weight: 300;
    }
    background-color: rgba(0, 0, 0, 0);
    border: 0.0625rem solid ${({ theme }) => theme.button};
    border-radius: 0.25rem;
  }

  hr {
    margin: 0 auto;
    width: 90%;
    border: 0.0313rem solid ${({ theme }) => theme.button};
  }
`;
