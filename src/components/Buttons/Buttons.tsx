import { useState } from "react";
import { createTask } from "../../api/public";
import { TypeCard, TypeStyledButton } from "../../const/Types";
import { MyCustomModalAddTask } from "../Modal/Modal";

import { StyledButton, StyledContainerButton } from "./styled";

export const MyCustomButton = ({ handleClick, label }: TypeStyledButton) => {
  return (
    <StyledButton onClick={() => handleClick()} variant="contained" fullWidth>
      {`${label}`}
    </StyledButton>
  );
};

export const MyCustomButtonToOpenModal = ({ refresh, setRefresh }: any) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const createNewTask = async (card: TypeCard) => {
    const { data } = await createTask(card);
    if (data.id) {
      setOpenModal(false);
      setRefresh(!refresh);
    }
  };

  return (
    <>
      <StyledContainerButton>
        <MyCustomButton
          handleClick={() => setOpenModal(true)}
          label="Add Task"
        ></MyCustomButton>
      </StyledContainerButton>

      <MyCustomModalAddTask
        open={openModal}
        handleCancel={() => setOpenModal(false)}
        handleOk={(card: TypeCard) => {
          createNewTask(card);
        }}
        values={null}
      />
    </>
  );
};
