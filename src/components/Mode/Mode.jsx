import { useState } from "react";
import st from "./Mode.module.scss";

import { ConfigProvider, Switch } from "antd";

export default function Mode() {
  const [checked, setChecked] = useState(true);
  const onChange = (checked) => {
    setChecked(checked);
  };
  return (
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
      <label> Mode</label>
    </div>
  );
}
