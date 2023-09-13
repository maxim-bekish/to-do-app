// import css from "./css.module.scss";
import InsertRow from "./components/InsertRow/InsertRow";
import Table from "./components/TableRight/Table";
import st from "./color.module.scss";
function App() {
  return (
    <div className={st.wrapper}>
      <InsertRow />
      <Table />
    </div>
  );
}

export default App;
