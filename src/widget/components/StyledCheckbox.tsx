import { Checkbox, CheckboxProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { HexColor } from "../../utils/enums";

const StyledCheckbox = styled((props: CheckboxProps) => (
  <Checkbox {...props} />
))(() => ({
  color: HexColor.Black,
  "&.Mui-checked": {
    color: HexColor.Green,
  },
  "&:not(.Mui-checked):hover": {
    color: HexColor.Black,
    opacity: 0.6,
  },
}));

export default StyledCheckbox;
