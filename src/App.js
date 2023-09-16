import InsertRow from "./components/InsertRow/InsertRow";
import Table from "./components/TableRight/Table";
import { ConfigProvider } from "antd";
import { useTheme } from "styled-components";
import styled from "styled-components";
const Wrapper = styled.div`
  margin-top: 12%;
  display: flex;
  justify-content: center;
  gap: 1.25rem;
  scale: 1.8;
  height: 19.0625rem;
`;
function App() {
  const theme = useTheme();

  const settings = {
    components: {
      Table: {
        padding: 2,
        paddingContentVerticalLG: 12,
        margin: 0,
        lineWidth: 0,
        borderRadiusLG: 0,
        colorFillAlter: theme.hover,
        lineHeight: 0,
        colorBorderSecondary: theme.hover,
        fontWeightStrong: 300,
        colorTextHeading: theme.white, // цвет текста загаловка тема1
        headerBg: theme.button, // цвет background загаловка
        colorText: theme.white, // цвет текста
        fontSize: 12, // размер шрифт
      },
      Switch: {
        handleBg: theme.background,
        handleSize: 12,
        trackHeight: 16,
        colorPrimary: theme.green,
        colorTextQuaternary: theme.green,
        colorPrimaryHover: theme.greenLight,
        colorTextTertiary: theme.greenLight,
        trackMinWidth: "20",
        handleShadow: "0 0px 0px 0 rgba(0, 35, 11, 0.2)",
      },
    },
  };

  return (
    <ConfigProvider theme={settings}>
      <Wrapper>
        <InsertRow />
        <Table />
      </Wrapper>
    </ConfigProvider>
  );
}

export default App;
