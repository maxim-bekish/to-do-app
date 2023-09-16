import { useContext, useState } from "react";

import Context from "./../../context";
import { DownOutlined } from "@ant-design/icons";
import * as S from "./select.styles";
import { styled, useTheme } from "styled-components";
export default function Select() {
  let x = useContext(Context);
  const [list, setList] = useState(true);
  const [valueSelect, setValueSelect] = useState("Subscribed");
  const handleChange = (e) => {
    setValueSelect(e.target.value);
  };
  x.useSelect.setSelectState(valueSelect);
  const takeText = (e) => {
    setValueSelect(e.target.innerText);
    setList(!list);
  };
  const theme = useTheme();
  const SelectMiniWrapperDown = styled.div`
    width: 100%;
    cursor: pointer;
    display: ${list ? "none" : "flex"};
    position: absolute;
    z-index: 3;
    top: 2.3rem;
    background-color: ${({ theme }) => theme.background};
    flex-direction: column;
gap:5px;
    div {    
      
      font-size: 13px;
      
      &:hover {
        width: 100%;
        background-color: ${({ theme }) => theme.green};
      }
    }
  `;

  return (
    <S.selectWrapper>
      <S.SelectMiniWrapperUp>
        <input onChange={handleChange} type="text" value={valueSelect} />
        <button
          onClick={() => {
            setList(!list);
          }}
        >
          <DownOutlined />
        </button>
      </S.SelectMiniWrapperUp>

      <SelectMiniWrapperDown>
        <div onClick={takeText}>Subscribed</div>
        <div onClick={takeText}>Not Subscribed</div>
        <div onClick={takeText}>Other</div>
      </SelectMiniWrapperDown>
    </S.selectWrapper>
  );
}
