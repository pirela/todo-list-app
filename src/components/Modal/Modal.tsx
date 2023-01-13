import { useEffect, useState } from "react";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import { TypeModal, TypeOption } from "../../const/Types";

import { MyCustomTextField, MyCustomSelectField } from "../Fields/Fields";
import { MyCustomButton } from "../Buttons/Buttons";
import { optionsSelectStatus } from "../../const/functions";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const MyCustomModalAddTask = ({
  open,
  handleCancel,
  handleOk,
  values,
}: TypeModal) => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [status, setStatus] = useState<TypeOption | null>(null);
  const [disabled, seDisabled] = useState<boolean>(false);

  useEffect(() => {
    if (values?.name) {
      setName(values.name);
      setDescription(values.description);
      setStatus({ value: values.status, label: values.status });
      seDisabled(true);
    }
  }, [values]);

  return (
    <Modal
      open={open}
      onClose={() => handleCancel()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <MyCustomTextField
          disabled={disabled}
          label="Name"
          handleChange={(value: string) => setName(value)}
          value={name}
        />
        <MyCustomTextField
          disabled={disabled}
          label="Description"
          handleChange={(value: string) => setDescription(value)}
          value={description}
        />
        <MyCustomSelectField
          disabled={disabled}
          handleChange={(value: TypeOption) => {
            setStatus(value);
          }}
          label="Status"
          value={status?.label || ""}
          options={optionsSelectStatus()}
        />
        {!values?.name && (
          <MyCustomButton
            handleClick={() =>
              handleOk({ name, description, status: status?.value })
            }
            label={"Add new task"}
          />
        )}
      </Box>
    </Modal>
  );
};
