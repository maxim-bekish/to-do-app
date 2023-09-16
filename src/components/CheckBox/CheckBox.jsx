import { useState } from "react";

import ok from "./../../svg/ok.svg";
import { useContext } from "react";
import Context from "./../../context";
import * as S from "./checkBox.styles";
import { useTheme } from "styled-components";

function Checkbox() {
  let x = useContext(Context);
  const theme = useTheme();
  const [check, setCheck] = useState(true);
  let tag;
  if (check) {
    tag = "";
  } else {
    tag = <img src={ok} alt="" />;
  }

  return (
    <S.checkBoxStyled>
      <label>
        <input
          type="checkbox"
          onChange={() => {
            setCheck(!check);
            if (check) {
              x.useCheckBox.setCheckBoxState("Employed");
            } else {
              x.useCheckBox.setCheckBoxState("Unemployed");
            }
          }}
          checked={check}
        />
        Employed
        <div></div>
        {tag}
      </label>
    </S.checkBoxStyled>
  );
}

export default Checkbox;
