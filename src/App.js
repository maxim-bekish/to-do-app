// import css from "./css.module.scss";
import InsertRow from "./components/InsertRow/InsertRow";
import Table from "./components/TableRight/Table";
import st from "./color.module.scss";
import Context from "./context";
import { useState } from "react";
import data from "./data";

function App() {
  const [value, setValueState] = useState("Name");
  const [select, setSelectState] = useState("Subscribed");
  const [checkBox, setCheckBoxState] = useState("No employed");
  const [deleteCard, setDeleteCard] = useState("");
  const [checked, setChecked] = useState(true);
  const [card, setCard] = useState(data);
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
    useCard: {
      card: card,
      setCard: setCard,
    },
    useChecked: {
      checked: checked,
      setChecked: setChecked,
    },

    useDeleteCard: {
      deleteCard: deleteCard,
      setDeleteCard: setDeleteCard,
    },
    deleteRow: function (x) {
      state.useCard.setCard((element) => {
        return element.filter(({ key }) => key !== x);
      });
    },
  };

  return (
    <Context.Provider value={state} >
      <div className={st.wrapper}>
        <InsertRow />
        <Table />
      </div>
    </Context.Provider>
  );
}

export default App;
