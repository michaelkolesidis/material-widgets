import { Tooltip, TooltipProps, tooltipClasses } from "@mui/material";
import { styled } from "@mui/material/styles";
import { HexColor } from "../../utils/enums";

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#ffffff",
    color: HexColor.Black,
    maxWidth: 220,
    textAlign: "center",
    fontSize: "14px",
    border: "1px solid #dadde9",
    padding: "24px 16px",
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "12px",
    borderRadius: "4px",
    boxShadow:
      "0px 0.77778px 2.99074px 0px rgba(0, 0, 0, 0.01), 0px 3.42222px 6.19259px 0px rgba(0, 0, 0, 0.02), 0px 8.4px 12.35px 0px rgba(0, 0, 0, 0.03), 0px 16.17778px 24.20741px 0px rgba(0, 0, 0, 0.03), 0px 27.22222px 44.50926px 0px rgba(0, 0, 0, 0.04), 0px 42px 76px 0px rgba(0, 0, 0, 0.05)",
  },
  "& a": {
    color: HexColor.Green,
    textDecoration: "none",
  },
}));

export default HtmlTooltip;
