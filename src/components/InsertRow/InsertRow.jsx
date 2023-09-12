import st from './InsertRow.module.scss'
export default function InserRow() {
  return (
    <div className={st.xxx}>
      <span>Insert Row</span>
      <input type="text" placeholder="Name" />
      <div className={st.inputAge}>
        <input type="age" placeholder="Age" />
        <button>Up</button>
        <button>{/* <DownOutlined /> */}</button>
      </div>
      <select name="" id="">
        <option id="1" value="1">
          1
        </option>
        <option id="2" value="2">
          2
        </option>
        <option id="3" value="3">
          3
        </option>
      </select>
      <div>
        <input type="checkBox" />
        <div>Employed</div>
      </div>
      <button>Insert</button>
      <hr />
      <input type="radio" />
      <button>Delete</button>
    </div>
  );
}
