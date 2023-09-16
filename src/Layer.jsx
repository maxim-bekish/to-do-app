import { ThemeProvider } from "styled-components";
import App from "./App";
import { lightTheme, darkTheme } from "./theme";
import Context from "./context";
import { useState } from "react";
import data from "./data";

import styled, { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
*{
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");
  margin: 0;
  padding: 0; 
  color: ${({ theme }) => theme.white};
  font-family: "Roboto", sans-serif !important;
  font-weight: 300;
  font-size: 0.875rem;
body{
  background-color:  ${({ theme }) => theme.background};
  padding: 1.875rem;
}
button{
  &:hover{

   background-color: ${({ theme }) => theme.buttonHover};

  }
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  background-color: ${({ theme }) => theme.button};
  color: ${({ theme }) => theme.white};
  border: 0;
  font-weight: 300;
  border-radius: 0.25rem;
  padding: 0.5313rem;
}
}

`;

export default function Layer() {
  const [age, setAgeState] = useState("Age");
  const [select, setSelectState] = useState("Subscribed");
  const [checkBox, setCheckBoxState] = useState("No employed");
  const [deleteCard, setDeleteCard] = useState("");
  const [checked, setChecked] = useState(false);
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
      age: age,
      setAgeState: setAgeState,
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
    <Context.Provider value={state}>
      <ThemeProvider theme={state.useChecked.checked ? lightTheme : darkTheme}>
        <App />
        <Global />
      </ThemeProvider>
    </Context.Provider>
  );
}
