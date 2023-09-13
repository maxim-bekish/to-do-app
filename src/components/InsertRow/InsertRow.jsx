import st from "./InsertRow.module.scss";
import Select from "../Select/Select";
import InputAge from "../InputAge/InputAge";
import Mode from "../Mode/Mode";
import xxx from "./../../fun";
import CheckBox from "./../CheckBox/CheckBox";
import { useState } from "react";

export default function InsertRow() {
  let obj = [];
  const [value, setValue] = useState("Name");
  const handelChange = (e) => {
    setValue(" ");
    setValue(e.target.value);
  };
  function handleClick() {
    obj.name = value;
    console.log(obj);
  }

  return (
    <div className={st.InsertRow}>
      <h1>Insert Row</h1>
      <input
        type="text"
        onClick={() => setValue("")}
        placeholder="Name"
        value={value}
        onChange={handelChange}
      />
      <InputAge />
      <Select />
      <CheckBox />
      <button onClick={handleClick}>Insert</button>
      <hr className={st.hr} />
      <Mode />
      <button> Delete</button>
    </div>
  );
}
