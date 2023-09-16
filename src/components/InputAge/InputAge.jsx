import { useContext, useEffect, useState } from "react";

import convertFromStringToNumber from "./../../fun.js";
import Context from "./../../context";
import * as S from "./inputAge.styles";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { useTheme } from "styled-components";

export default function InputAge() {
  const [value, setValue] = useState("Age");
  const [arr, setArr] = useState();
  let state = useContext(Context);
  const theme = useTheme();
  const handleChange = (e) => {
    setValue();
    setArr(convertFromStringToNumber(e.target.value));
  };
  function test() {
    if (arr >= 18 && arr <= 100) {
      setArr(arr + 1);
    } else {
      if (arr <= 18) {
        setArr(18 + 1);
      }
      if (arr >= 100) {
        setArr(100);
      }
    }
  }

  function test2() {
    if (arr >= 18 && arr <= 100) {
      setArr(arr - 1);
    } else {
      if (arr <= 18) {
        setArr(18);
      }
      if (arr >= 100) {
        setArr(100 - 1);
      }
    }
  }
  useEffect(() => {
    setValue(arr);
    state.useAge.setAgeState(arr);
  }, [arr]);

  return (
    <S.inputAgeStyled>
      <input onChange={handleChange} type="text" value={value} />
      <div>
        <button onClick={test2}>
          <DownOutlined />
        </button>
        <button onClick={test}>
          <UpOutlined />
        </button>
      </div>
    </S.inputAgeStyled>
  );
}
