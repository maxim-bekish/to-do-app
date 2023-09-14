import { useContext } from "react";
import st from "./TableRight.module.scss";
import { ConfigProvider, Table } from "antd";
import Context from "./../../context";
export default function TableRight() {
  let state = useContext(Context);
let x=localStorage.getItem('data')
console.log(JSON.parse(x))

  return (
    <div className={st.wrapperTable}>
      <ConfigProvider
        theme={{
          components: {
            Table: {
              padding: 2,
              paddingContentVerticalLG: 12,
              margin: 0,
              lineWidth: 0,
              borderRadiusLG: 0,
              colorFillAlter: "rgba(255, 0, 0, 0)", // hover
              lineHeight: 0,
              colorBorderSecondary: "#f0000",
              fontWeightStrong: 300,
              colorTextHeading: "#f0000", // цвет текста загаловка
              colorBgContainer: "#313131", // color background
              headerBg: "#595959", // цвет background загаловка
              colorText: "#f0000", // цвет текста
              fontSize: 12, // размер шрифт
            },
          },
        }}
      >
        <Table
          className={st.table}
          scroll={{
            y: 302,
          }}
          width={40}
          dataSource={JSON.parse(x)}
          columns={state.columns}
          pagination={false}
        />
      </ConfigProvider>
    </div>
  );
}
