import { useContext, useState } from "react";
import st from "./Select.module.scss";
import Context from "./../../context";
import { DownOutlined } from "@ant-design/icons";

export default function Select() {
  let x = useContext(Context);
  const [list, setList] = useState(true);
  const [valueSelect, setValueSelect] = useState("Subscribed");
  const handleChange = (e) => {
    setValueSelect(e.target.value);
  };
  x.useSelect.setSelectState(valueSelect);
  const takeText = (e) => {
    setValueSelect(e.target.innerText);
    setList(!list);
    // console.log(valueSelect); //   итоговый результат
  };
  return (
    <>
      <div className={st.select}>
        <div>
          <input onChange={handleChange} type="text" value={valueSelect} />
          <button
            onClick={() => {
              setList(!list);
            }}
          >
            <DownOutlined />
          </button>
        </div>
        <div className={list ? `${st.parent}` : `${st.active}`}>
          <div onClick={takeText} className={st.option}>
            Subscribed
          </div>
          <div onClick={takeText} className={st.option}>
            Not Subscribed
          </div>
          <div onClick={takeText} className={st.option}>
            Other
          </div>
        </div>
      </div>
    </>
  );
}
