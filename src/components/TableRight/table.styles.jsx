import { Table } from "antd";
import styled from "styled-components";

export const WrapperTable = styled("div")`
  width: 28.125rem;
  height: 100%;
  box-sizing: border-box;
  border-radius: 0.3125rem;
  border: 0.0625rem solid ${({ theme }) => theme.button};
`;

export const StyledTable = styled(Table)`
  div {
    div {
      div {
        div:nth-child(2) {
          table {
            border-collapse: collapse;
            tbody {
              tr {
                cursor: pointer;
                height: 1.5rem !important;
              }
            }
          }
          width: 400px;
          padding: 0.4375rem 0.625rem 0 0.1875rem;
          &::-webkit-scrollbar {
            width: 0.375rem;
            background-color: ${({ theme }) => theme.button};
          }
          &::-webkit-scrollbar-thumb {
            background-color: ${({ theme }) => theme.green};
          }
          height: 302px;
        }
        div:nth-child(1) {
          table {
            thead {
              tr {
                th {
                  border-top: 0.25rem solid ${({ theme }) => theme.background};
                }
              }
            }
          }
          th {
            text-align: center;
          }
          box-sizing: border-box;
          position: absolute;
          z-index: 1;
          margin: 0 0.1875rem;
          width: 27.25rem;
        }
      }
    }
  }
`;
