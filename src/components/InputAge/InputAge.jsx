import { useContext, useEffect, useState } from "react";
import st from "./InputAge.module.scss";
import convertFromStringToNumber from "./../../fun.js";
import Context from "./../../context";

import { DownOutlined, UpOutlined } from "@ant-design/icons";

export default function InputAge() {
  const [value, setValue] = useState("");
  const [arr, setArr] = useState(0);
  let r = useContext(Context);

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
    r.useAge.setValueState(arr);
  }, [arr]);

  return (
    <>
      <div className={st.inputAge}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Age"
          value={value}
        />
        <div className={st.buttonArrow}>
          <button onClick={test2}>
            <DownOutlined />
          </button>
          <button onClick={test}>
            <UpOutlined />
          </button>
        </div>
      </div>
    </>
  );
}
