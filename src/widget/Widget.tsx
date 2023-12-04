import { Box, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import LeafLogo from "./components/LeafLogo";
import StyledCheckbox from "./components/StyledCheckbox";
import StyledRadio from "./components/StyledRadio";
import StyledSwitch from "./components/StyledSwitch";
import HtmlTooltip from "./components/HtmlTooltip";
import { Color, HexColor } from "../utils/enums";
import { WidgetProperties } from "../utils/interfaces";
import { colorMappings } from "../utils/utils";
import useStore from "../stores/useStore";

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
    backgroundColor: colorMappings[selectedColor],
    color:
      selectedColor === "beige"
        ? colorMappings[Color.Green]
        : selectedColor === "white"
        ? colorMappings[Color.Black]
        : colorMappings[Color.White],
    borderRadius: "5.995px",
  };

  const typographyStyle = {
    color: colorMappings[Color.Green],
  };

  const logoColor = (selectedColor: string): HexColor => {
    return selectedColor === "beige"
      ? colorMappings[Color.Green]
      : selectedColor === "white"
      ? colorMappings[Color.Black]
      : colorMappings[Color.White];
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

  /**
   * Components
   */
  const styledRadios = Object.values(Color).map((color) => (
    <StyledRadio
      key={color}
      disabled={!active}
      checked={selectedColor === color}
      onChange={handleColorChange}
      value={color}
      name="color-buttons"
      backgroundColor={colorMappings[color]}
    />
  ));

  return (
    <Box sx={{ width: "260px", marginBottom: "10px" }}>
      <Box
        sx={{
          ...widgetHeaderStyle,
        }}
      >
        <Box>
          <LeafLogo color={logoColor(selectedColor)} />
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
              <InfoOutlinedIcon sx={{ height: "15px", marginBottom: "2px" }} />
            </HtmlTooltip>
          </Typography>
          <StyledCheckbox
            disabled={!active}
            checked={linked}
            onChange={handleLinkChange}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ ...typographyStyle }}>Badge color</Typography>
          <Box>{styledRadios}</Box>
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
