import styled from "styled-components";

export const inputAgeStyled = styled("div")`
  display: flex;
  input {
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
    width: 100%;
  }

  div {
    display: flex;
    flex-direction: row;
    button {
      border-radius: 0rem;
      &:nth-child(2) {
        border-top-right-radius: 0.3125rem;
        border-bottom-right-radius: 0.3125rem;
        border-left: 0.0313rem solid #ffffff1e;
      }
    }
  }
`;
