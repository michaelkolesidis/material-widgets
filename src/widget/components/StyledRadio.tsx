import { Radio, RadioProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { HexColor } from "../../utils/enums";

const StyledRadio = styled(
  (props: RadioProps & { backgroundColor: HexColor }) => <Radio {...props} />
)(({ backgroundColor }) => ({
  height: "20px",
  width: "20px",
  marginLeft: "4px",
  backgroundColor: backgroundColor,
  color: "#0000",
  borderRadius: "0%",
  "&.Mui-checked": {
    color: "#0000",
    boxShadow: "inset 0px 0px 0px 2.5px #B0B0B0",
  },
  "&:hover": {
    backgroundColor: backgroundColor,
  },
  "&:not(.Mui-checked):hover": {
    backgroundColor: backgroundColor,
    opacity: 0.8,
  },
}));

export default StyledRadio;
