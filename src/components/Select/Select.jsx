import { useState } from "react";
import st from "./Select.module.scss";

import { DownOutlined } from "@ant-design/icons";

export default function Select() {
  const [list, setList] = useState(true);
  const [valueSelect, setValueSelect] = useState("Subscribed");
  const handleChange = (e) => {
    setValueSelect(e.target.value);
   console.log(valueSelect);  //   итоговый результат
  };

  const takeText = (e) => {
    setValueSelect(e.target.innerText);
    setList(!list);
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
