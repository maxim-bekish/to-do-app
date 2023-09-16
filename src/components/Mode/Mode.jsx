import { useContext } from "react";
import Context from "./../../context";
import { Switch } from "antd";
import styled from "styled-components";

const ModeStyle = styled.div`
  gap: 0.625rem;
  width: 70px;
  display: flex;
  font-size: 0.7813rem;
  width: 2.1875rem;

  button {
    div {
      div {
        border: 2rem !important;
        --wave-color: #ffffff00 !important;
      }
    }
  }
`;

export default function Mode(props) {
  const state = useContext(Context);
  const onChange = (checked) => {
    state.useChecked.setChecked(checked);
  };

  return (
    <ModeStyle {...props}>
      <Switch defaultChecked={false} onChange={onChange} />
      <label> Mode</label>
    </ModeStyle>
  );
}
