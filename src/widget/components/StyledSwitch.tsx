import Switch, { SwitchProps } from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import { HexColor } from "../../utils/enums";

const StyledSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(() => ({
  width: 42,
  height: 26,
  padding: 0,
  marginTop: "8px",
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: HexColor.Green,
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: "grey",
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.7,
    },
    "&:hover": {
      "& .MuiSwitch-thumb": {
        boxShadow: "10px 10px 10px 5px rgba(51, 207, 77, 1)",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "#E9E9EA",
    opacity: 1,
  },
}));

export default StyledSwitch;
