import { DownOutlined, UpOutlined } from "@ant-design/icons";
import st from "./InsertRow.module.scss";

import { ConfigProvider, Switch } from "antd";
import CheckBox from "./../CheckBox/CheckBox";
import { useState } from "react";

export default function InserRow() {
  const [checked, setChecked] = useState(true);
  const onChange = (checked) => {
    setChecked(checked);
  };
  return (
    <div className={st.xxx}>
      <h1>Insert Row</h1>
      {/* ------------------------------- */}
      <input type="text" placeholder="Name" />
      {/* ------------------------------- */}
      <div className={st.inputAge}>
        <input type="age" placeholder="Age" />
        <div className={st.buttonArrow}>
          <button className={st.upDown}>
            <DownOutlined />
          </button>
          <button className={st.upDown}>
            <UpOutlined />
          </button>
        </div>
      </div>
      {/* ------------------------------- */}
      <div className={st.select}>
        <div>
          <input type="text" />
          <button className={st.upDown}>
            <DownOutlined />
          </button>
        </div>
        <div className={st.parent}>
          <div className={st.option}>Subscribed</div>
          <div className={st.option}>Not Subscribed</div>
          <div className={st.option}>Other</div>
        </div>
      </div>
      {/* ------------------------------- */}
      <CheckBox />
      {/* ------------------------------- */}
      <button>Insert</button>
      {/* ------------------------------- */}
      <hr className={st.hr} />
      {/* ------------------------------- */}
      <div className={st.sss} style={{ width: 70 }}>
        <ConfigProvider
          theme={{
            components: {
              Switch: {
                handleBg: `${checked ? "#ffffff" : "#313131"} `,
                handleSize: 12,
                trackHeight: 16,
                colorPrimary: `#217346`,
                colorTextQuaternary: "#217346",
                colorPrimaryHover: "#217346",
                colorTextTertiary: "#217346",
                trackMinWidth: "20",
                handleShadow: "0 0px 0px 0 rgba(0, 35, 11, 0.2)",
              },
            },
          }}
        >
          <Switch defaultChecked onChange={onChange} />
        </ConfigProvider>
      </div>
      {/* ------------------------------- */}
      <button>Delete</button>
    </div>
  );
}
