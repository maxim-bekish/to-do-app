import { useState } from "react";
import st from "./CheckBox.module.scss";
import ok from "./../../svg/ok.svg";

function Checkbox() {
  const [check, setCheck] = useState(true);
  let x;
  if (check) {
    x = <img src={ok} alt="" className={st.img} />;
  } else {
    x = "";
  }

  return (
    <div className={st.wrapper}>
      <label className={st.label}>
        <input
          type="checkbox"
          onChange={() => setCheck(!check)}
          checked={check}
          className={st.input}
        />
        Employed
        <div className={st.checkedBox}></div>
        {x}
      </label>
    </div>
  );
}

export default Checkbox;
