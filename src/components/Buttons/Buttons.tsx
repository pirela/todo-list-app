import { useState } from "react";
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

export const MyCustomButtonToOpenModal = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <>
      <StyledContainerButton>
        <MyCustomButton
          handleClick={() => setOpenModal(true)}
          label="Add Card"
        ></MyCustomButton>
      </StyledContainerButton>

      <MyCustomModalAddTask
        open={openModal}
        handleCancel={() => setOpenModal(false)}
        handleOk={(card: TypeCard) => {
          console.info("add new card:", card);
          setOpenModal(false);
        }}
        values={null}
      />
    </>
  );
};
