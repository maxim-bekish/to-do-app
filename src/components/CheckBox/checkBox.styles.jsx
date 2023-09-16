
import { styled } from "styled-components";

export const checkBoxStyled = styled("div")`
  display: flex;
  align-items: center;
  margin-left: 0.625rem;

  label {
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 1rem;
    &:hover {
    .checkedBox {
    background-color: red;
    }
    }
    input {
      cursor: pointer;
      opacity: 0;
      position: absolute;
    }
    div {
      border: 0.0625rem solid ${({ theme }) => theme.green};
      border-radius: 0.3125rem;
      box-sizing: border-box;
      position: absolute;
      width: 18px;
      height: 18px;
      margin-left: -1.625rem;
    }

    img {
      border-radius: 0.3125rem;
      background-color: ${({ theme }) => theme.green};
      box-sizing: border-box;
      position: absolute;
      width: 19px;
      height: 19px;
      margin-left: -1.625rem;
    }
  }
`;
