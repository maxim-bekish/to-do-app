import { useContext } from "react";
import st from "./TableRight.module.scss";
import { ConfigProvider, Table } from "antd";
import Context from "./../../context";

export default function TableRight() {
  let state = useContext(Context);

  let obj = JSON.parse(localStorage.getItem("data"));
  // console.log(state.useCard);
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
              colorFillAlter: "#313131", // hover
              lineHeight: 0,
              colorBorderSecondary: "#595959",
              fontWeightStrong: 300,
              colorTextHeading: "#ffffff", // цвет текста загаловка
              headerBg: "#595959", // цвет background загаловка
              colorText: "#ffffff", // цвет текста
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
          onRow={(e) => ({
            onClick: () => {
              state.useDeleteCard.setDeleteCard(e.key);
            },
          })}
          // width={40}
          rowClassName={(record) =>
            record.key === state.useDeleteCard.deleteCard ? "test" : ""
          }
          // rowClassName={"test"}
          dataSource={
            state.useCard.card.length === 0 ? obj : state.useCard.card
          }
          columns={state.columns}
          pagination={false}
        />
      </ConfigProvider>
    </div>
  );
}
