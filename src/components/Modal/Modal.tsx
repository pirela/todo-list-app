import { useEffect, useState } from "react";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import { TypeModal, TypeOption } from "../../const/Types";

import { MyCustomTextField, MyCustomSelectField } from "../Fields/Fields";
import { MyCustomButton } from "../Buttons/Buttons";
import { optionsSelectStatus } from "../../const/functions";
import { StyledTextError } from "./styled";

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
  const [id, setId] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [status, setStatus] = useState<TypeOption | null>(null);
  const [disabled, seDisabled] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const validate = () => {
    if (name && description && status) {
      setError(false);
      handleOk({ id, name, description, status: status?.value });
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    if (values?.name) {
      setId(values.id)
      setName(values.name);
      setDescription(values.description);
      setStatus({ value: values.status, label: values.status });
      seDisabled(true);
    } else {
      setName("");
      setDescription("");
      setStatus(null);
      seDisabled(false);
    }
  }, [values, open]);

  return (
    <Modal open={open} onClose={() => handleCancel()}>
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
          handleChange={(value: TypeOption) => {
            setStatus(value);
          }}
          label="Status"
          value={status?.label || ""}
          options={optionsSelectStatus()}
        />

        <MyCustomButton
          handleClick={() => validate()}
          label={values?.name ? "Update Task" : "Add new task"}
        />

        {error && (
          <StyledTextError>{`Debe rellenar todos los campos`}</StyledTextError>
        )}
      </Box>
    </Modal>
  );
};
