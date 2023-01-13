import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { TypeStyledTextField } from "../../const/Types";

import { StyledTextField } from "./styled";

export const MyCustomTextField = ({
  label,
  handleChange,
  value,
  disabled = false,
}: TypeStyledTextField) => {
  return (
    <StyledTextField
      id="outlined-basic"
      label={label}
      defaultValue={value}
      value={value}
      onChange={(e) => handleChange(e.target.value)}
      variant="outlined"
      fullWidth
      required
      disabled={disabled}
    />
  );
};

export const MyCustomSelectField = ({
  label,
  value,
  handleChange,
  options,
  disabled = false,
}: TypeStyledTextField) => {
  return (
    <Box sx={{ margin: "12px auto" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          disabled={disabled}
          value={value}
          defaultValue={value}
          onChange={(e: any) => {
            handleChange({ value: e.target.value, label: e.target.value });
          }}
        >
          {(options || [])?.map((option) => (
            <MenuItem value={option.value}> {option.label} </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
