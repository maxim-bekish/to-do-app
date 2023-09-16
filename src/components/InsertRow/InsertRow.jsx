import Select from "../Select/Select";
import InputAge from "../InputAge/InputAge";
import Mode from "../Mode/Mode";
import Context from "./../../context";
import CheckBox from "./../CheckBox/CheckBox";
import { useContext, useState } from "react";
import * as S from "./insertRow.styles";
import { useTheme } from "styled-components";

export default function InsertRow() {
  const state = useContext(Context);
  const [value, setValue] = useState("Name");
  const theme = useTheme();

  const handelChange = (e) => {
    setValue(" ");
    setValue(e.target.value);
  };

  function handleClick() {
    let newObj = {
      name: value,
      age: state.useAge.age,
      address: state.useSelect.select,
      checkBox: state.useCheckBox.checkBox,
      key: state.useAge.age + Math.random(),
    };

    console.log(state.useAge.age);
    // localStorage.setItem("DATA_BASE", JSON.parse(state.useCard.card));
    if (!state.useAge.age) {
      if (state.useAge.age === 0) {
        state.useCard.setCard((e) => [...e, newObj]);
      } else {
        alert('Enter a number in the "Age" field and click Insert ');
      }
     
    } else {
      state.useCard.setCard((e) => [...e, newObj]);
    }
  }
  const handleClickDelete = () => {
    state.deleteRow(state.useDeleteCard.deleteCard);
  };
  return (
    <S.InsertRow>
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
      <hr />
      <Mode />
      <button onClick={handleClickDelete}> Delete</button>
    </S.InsertRow>
  );
}
