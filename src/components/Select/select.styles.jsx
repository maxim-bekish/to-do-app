import styled from "styled-components";
export const selectWrapper = styled("div")`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const SelectMiniWrapperUp = styled("div")`
  display: flex;

  input {
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important ;
    width: 100%;
    color: ${({ theme }) => theme.white};
  }

  button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

