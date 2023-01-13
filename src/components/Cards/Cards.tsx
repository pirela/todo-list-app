import { useState } from "react";

import {
  CheckCircleOutlineRounded,
  AccountCircleRounded,
  DeleteForeverRounded,
} from "@mui/icons-material";

import { StyledContainerCard, StyledText, StyledIcon } from "./styled";

import { EnumStatus, TypeCard } from "../../const/Types";

import { MyCustomModalAddTask } from "../Modal/Modal";

export const MyCustomCard = ({ date, description, name, status }: TypeCard) => {
  const [openModal, setOpenModal] = useState(false);
  const handleClick = () => {
    setOpenModal(true);
  };

  return (
    <>
      <StyledContainerCard>
        <StyledIcon>
          <CheckCircleOutlineRounded
            style={{ color: status === EnumStatus.DONE ? "green" : "gray" }}
          />
        </StyledIcon>
        <StyledText
          onClick={() => handleClick()}
          width={430}
          align="left"
        >{`${name}`}</StyledText>
        <StyledText
          onClick={() => handleClick()}
          width={80}
          align="center"
        >{`${date}`}</StyledText>
        <StyledText
          onClick={() => handleClick()}
          width={100}
          align="center"
        >{`${status}`}</StyledText>
        <StyledIcon onClick={() => handleClick()}>
          <AccountCircleRounded />
        </StyledIcon>
        <StyledIcon>
          <DeleteForeverRounded
            onClick={() => {
              console.info("remove");
            }}
          />
        </StyledIcon>
      </StyledContainerCard>

      <MyCustomModalAddTask
        open={openModal}
        handleCancel={() => setOpenModal(false)}
        handleOk={(card: TypeCard) => {
          console.info("add new card:", card);
          setOpenModal(false);
        }}
        values={{ date, description, name, status }}
      />
    </>
  );
};
