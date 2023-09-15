import { useEffect, useState } from "react";
import st from "./CheckBox.module.scss";
import ok from "./../../svg/ok.svg";
import { useContext } from "react";
import Context from "./../../context";
function Checkbox() {
  let x = useContext(Context);

  const [check, setCheck] = useState(true);
  let tag;
  if (check) {
    tag = "";
  } else {
    tag = <img src={ok} alt="" className={st.img} />;
  }

  // useEffect ( ()=>{

  //   document.body.style.setProperty( '' )
  // },[] )

  return (
    <div className={st.wrapper}>
      <label className={st.label}>
        <input
          type="checkbox"
          onChange={() => {
            setCheck(!check);
            if (check) {
              x.useCheckBox.setCheckBoxState("Employed");
            } else {
              x.useCheckBox.setCheckBoxState("No employed");
            }
          }}
          checked={check}
          className={st.input}
        />
        Employed
        <div className={st.checkedBox}></div>
        {tag}
      </label>
    </div>
  );
}

export default Checkbox;
