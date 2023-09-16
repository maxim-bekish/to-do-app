import { useContext } from "react";

import Context from "./../../context";
import * as S from "./table.styles.jsx";
import { useTheme } from "styled-components";

export default function TableRight() {
  let state = useContext(Context);

  const theme = useTheme();

  return (
    <S.WrapperTable>
      <S.StyledTable
        scroll={{
          y: 265,
        }}
        onRow={(e) => ({
          onClick: () => {
            console.log(e);
            state.useDeleteCard.setDeleteCard(e.key);
          },
        })}
    
        dataSource={state.useCard.card}
        columns={state.columns}
        pagination={false}
      />
    </S.WrapperTable>
  );
}
