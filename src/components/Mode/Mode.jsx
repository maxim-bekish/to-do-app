import { useContext } from "react";
import st from "./Mode.module.scss";
import Context from "./../../context";

import { ConfigProvider, Switch } from "antd";

export default function Mode() {
  const state = useContext(Context);
  const onChange = (checked) => {
    state.useChecked.setChecked(checked);
  };
  return (
    <div className={st.sss} style={{ width: 70 }}>
      <ConfigProvider
        theme={{
          components: {
            Switch: {
              handleBg: `${state.useChecked.checked ? "#ffffff" : "#313131"} `,
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
