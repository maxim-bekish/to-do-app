import st from "./TableRight.module.scss";
import { ConfigProvider, Table } from "antd";
export default function TableRight() {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 130,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      width: 50,
    },
    {
      title: "Subscription",
      dataIndex: "address",
      key: "address",
      width: 100,
    },
    {
      title: "Employment",
      dataIndex: "www",
      key: "www",
      width: 140,
    },
  ];
  const data = [
   
    {
      key: "1",
      name: "Joe Black",
      age: 1,
      address: "Sydney No",
      www: "wewevwev",
    },
    {
      key: "2",
      name: "Joe Black",
      age: 2,
      address: "Sydney No",
      www: "wewevwev",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 3,
      address: "Sydney No",
      www: "wewevwev",
    },
  ];
  return (
    <>
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
            dataSource={data}
            columns={columns}
            pagination={false}
          />
        </ConfigProvider>
      </div>
    </>
  );
}
