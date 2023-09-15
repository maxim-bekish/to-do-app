import st from "./InsertRow.module.scss";
import Select from "../Select/Select";
import InputAge from "../InputAge/InputAge";
import Mode from "../Mode/Mode";
import Context from "./../../context";
import CheckBox from "./../CheckBox/CheckBox";
import { useContext, useState } from "react";

export default function InsertRow() {
  const state = useContext(Context);
console.log(state)
  // let t = JSON.parse(data);
  const [value, setValue] = useState("Name");
  // const [listItem, setListItem] = useState(t);

  const handelChange = (e) => {
    setValue(" ");
    setValue(e.target.value);
  };
  // console.log(state);
  function handleClick() {
    let newObj = {
      name: value,
      age: state.useAge.value,
      address: state.useSelect.select,
      checkBox: state.useCheckBox.checkBox,
      key: state.useAge.value + Math.random(),
    };
    // let newArr = [...listItem, newObj];
    // 34 ==newArr
    // newArr.forEach((e, i) => {
    //   e.key = i;
    // });

  
    let r = state.useCard.card;
    // console.log(r);
    // console.log(newArr);
    state.useCard.setCard((e) => [...e, newObj]);
  }
  const handleClickDelete = () => {
    state.deleteRow(state.useDeleteCard.deleteCard);
    // console.log(fr)
    // state.useCard.setCard(fr);
  };
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
      <button onClick={handleClickDelete}> Delete</button>
    </div>
  );
}
