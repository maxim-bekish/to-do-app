import st from "./InsertRow.module.scss";
import Select from "../Select/Select";
import InputAge from "../InputAge/InputAge";
import Mode from "../Mode/Mode";
import Context from "./../../context";

import CheckBox from "./../CheckBox/CheckBox";
import { useContext, useState } from "react";

export default function InsertRow() {
  const x = useContext(Context);
  let obj = {};
  const [value, setValue] = useState("Name");
  const handelChange = (e) => {
    setValue(" ");
    setValue(e.target.value);
  };
  let data = localStorage.getItem("data");
  function handleClick() {
    // console.log(obj);
    obj.name = value;
    obj.age = x.useAge.value;
    obj.address = x.useSelect.select;
    obj.checkBox = x.useCheckBox.checkBox;
    let t = JSON.parse(data);
    t.push(obj);
    
    localStorage.setItem( 'data',JSON.stringify(t));
    // console.log();
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
