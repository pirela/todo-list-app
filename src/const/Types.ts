export type TypeCard = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  status: string;
  refresh?: boolean;
  setRefresh?: Function;
  handleDelete?: Function;
};

export type TypeStyledText = {
  align: string;
  width: number;
};

export type TypeStyledButton = {
  handleClick: Function;
  label: string;
};

export type TypeStyledTextField = {
  handleChange: Function;
  label: string;
  value: string;
  options?: TypeOption[];
  disabled?: boolean;
};

export type TypeOption = {
  value: string;
  label: string;
};
export type TypeModal = {
  open: boolean;
  handleOk: Function;
  handleCancel: Function;
  values: TypeCard | null;
};

export enum EnumStatus {
  DONE = "Done",
  PENDING = "Pending",
  BLOCKED = "Blocked",
  PROGRESS = "Progress",
}
