import { Box, Typography } from "@mui/material";
import GreenparkLogo from "./components/GreesparkLogo";
import { WidgetProperties } from "../utils/interfaces";
import useStore from "../stores/useStore";
import { Color, HexColor } from "../utils/enums";
import { getColor } from "../utils/utils";
import StyledCheckbox from "./components/StyledCheckbox";
import StyledRadio from "./components/StyledRadio";
import StyledSwitch from "./components/StyledSwitch";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import HtmlTooltip from "./components/HtmlTooltip";

const Widget: React.FC<WidgetProperties> = ({
  id,
  type,
  amount,
  action,
  active,
  linked,
  selectedColor,
}) => {
  const { toggleLink, setColor, toggleActive } = useStore();

  /**
   * Styling
   */
  const widgetHeaderStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "10.297px 13.895px 10.297px 11.91px",
    gap: "11.91px",
    backgroundColor: getColor(selectedColor),
    color:
      selectedColor === "beige"
        ? getColor(Color.Green)
        : selectedColor === "white"
        ? getColor(Color.Black)
        : getColor(Color.White),
    borderRadius: "5.995px",
  };

  const typographyStyle = {
    color: getColor(Color.Green),
  };

  const logoColor = (selectedColor: string): HexColor => {
    return selectedColor === "beige"
      ? getColor(Color.Green)
      : selectedColor === "white"
      ? getColor(Color.Black)
      : getColor(Color.White);
  };

  /**
   * Handlers
   */
  const handleLinkChange = () => {
    toggleLink(id);
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(id, event.target.value as Color);
  };

  const handleActiveChange = () => {
    toggleActive(id);
  };

  const handleClick = () => {
    console.log("d");
  };

  return (
    <Box sx={{ width: "260px", marginRight: "30px", marginBottom: "10px" }}>
      <Box
        sx={{
          ...widgetHeaderStyle,
        }}
      >
        <Box>
          <GreenparkLogo color={logoColor(selectedColor)} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography
            sx={{
              fontSize: "12.406px",
              fontWeight: "400",
            }}
          >
            This product {action}
          </Typography>
          <Typography
            sx={{
              fontSize: "17.865px",
              fontWeight: "700",
            }}
          >
            {amount} {type}
          </Typography>
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ ...typographyStyle }}>
            Link to Public Profile
            <HtmlTooltip
              title={
                <>
                  <Typography>
                    This widget links directly to your public profile so that
                    you can easily share your impact with your customers. Turn
                    it off here if you do not want the badge to link to it.
                  </Typography>
                  <a href="#">View Public Profile</a>
                </>
              }
            >
              <InfoOutlinedIcon
                sx={{ height: "15px", marginBottom: "2px" }}
                onClick={handleClick}
              />
            </HtmlTooltip>
          </Typography>
          <StyledCheckbox checked={linked} onChange={handleLinkChange} />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ ...typographyStyle }}>Badge color</Typography>
          <Box>
            <StyledRadio
              checked={selectedColor === "blue"}
              onChange={handleColorChange}
              value="blue"
              name="color-buttons"
              backgroundColor={HexColor.Blue}
            />
            <StyledRadio
              checked={selectedColor === "green"}
              onChange={handleColorChange}
              value="green"
              name="color-buttons"
              backgroundColor={HexColor.Green}
            />
            <StyledRadio
              checked={selectedColor === "beige"}
              onChange={handleColorChange}
              value="beige"
              name="color-buttons"
              backgroundColor={HexColor.Beige}
            />
            <StyledRadio
              checked={selectedColor === "white"}
              onChange={handleColorChange}
              value="white"
              name="color-buttons"
              backgroundColor={HexColor.White}
            />
            <StyledRadio
              checked={selectedColor === "black"}
              onChange={handleColorChange}
              value="black"
              name="color-buttons"
              backgroundColor={HexColor.Black}
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "end",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ ...typographyStyle }}>Activate Badge</Typography>
          <StyledSwitch checked={active} onChange={handleActiveChange} />
        </Box>
      </Box>
    </Box>
  );
};

export default Widget;
