import { useState } from "react";

import dayjs from "dayjs";

import {
  CheckCircleOutlineRounded,
  AccountCircleRounded,
  DeleteForeverRounded,
} from "@mui/icons-material";

import { StyledContainerCard, StyledText, StyledIcon } from "./styled";

import { EnumStatus, TypeCard } from "../../const/Types";

import { MyCustomModalAddTask } from "../Modal/Modal";
import { putTask } from "../../api/public";

export const MyCustomCard = ({
  createdAt,
  description,
  name,
  status,
  id,
  handleDelete,
  setRefresh,
  refresh,
}: TypeCard) => {
  const [openModal, setOpenModal] = useState(false);

  const updateTask = async (card: TypeCard) => {
    const { data } = await putTask(card);
    if (data[0]) {
      setOpenModal(false);
      setRefresh && setRefresh(!refresh);
    }
  };

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
          width={410}
          align="left"
        >{`${name}`}</StyledText>
        <StyledText
          onClick={() => handleClick()}
          width={100}
          align="center"
        >{`${dayjs(createdAt).format("DD-MM-YYYY")}`}</StyledText>
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
              handleDelete && handleDelete(id);
            }}
          />
        </StyledIcon>
      </StyledContainerCard>

      <MyCustomModalAddTask
        open={openModal}
        handleCancel={() => setOpenModal(false)}
        handleOk={(card: TypeCard) => {
          updateTask(card);
        }}
        values={{ createdAt, description, name, status, id }}
      />
    </>
  );
};
