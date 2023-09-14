// import css from "./css.module.scss";
import InsertRow from "./components/InsertRow/InsertRow";
import Table from "./components/TableRight/Table";
import st from "./color.module.scss";
import Context from "./context";
import { useState } from "react";

function App() {
  const [value, setValueState] = useState("");
  const [select, setSelectState] = useState("");
  const [checkBox, setCheckBoxState] = useState(false);
  const state = {
    columns: [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        width: 130,
      },
      {
        title: "Age",
        dataIndex: "age",
        key: "age",
        width: 50,
      },
      {
        title: "Subscription",
        dataIndex: "address",
        key: "address",
        width: 100,
      },
      {
        title: "Employment",
        dataIndex: "checkBox",
        key: "checkBox",
        width: 100,
      },
    ],
    data: [
      {
        key: "1",
        name: "Joe Black",
        age: 1,
        address: "Sydney No",
        checkBox: "wewevwev",
      },
      {
        key: "2",
        name: "Joe Black",
        age: 2,
        address: "Sydney No",
        checkBox: "wewevwev",
      },
      {
        key: "3",
        name: "Joe Black",
        age: 3,
        address: "Sydney No",
        checkBox: "wewevwev",
      },
      {
        key: "4",
        name: "Joe Black",
        age: 3,
        address: "Sydney No",
        checkBox: "wewevwev",
      },
      {
        key: "5",
        name: "Joe Black",
        age: 3,
        address: "Sydney No",
        checkBox: "wewevwev",
      },
      {
        key: "6",
        name: "Joe Black",
        age: 3,
        address: "Sydney No",
        checkBox: "wewevwev",
      },
      {
        key: "7",
        name: "Joe Black",
        age: 3,
        address: "Sydney No",
        checkBox: "wewevwev",
      },
    ],
    useAge: {
      value: value,
      setValueState: setValueState,
    },
    useSelect: {
      select: select,
      setSelectState: setSelectState,
    },
    useCheckBox: {
      checkBox: checkBox,
      setCheckBoxState: setCheckBoxState,
    },
  };
  localStorage.setItem("data", JSON.stringify(state.data));
  return (
    <Context.Provider value={state}>
      <div className={st.wrapper}>
        <InsertRow />
        <Table />
      </div>
    </Context.Provider>
  );
}

export default App;
