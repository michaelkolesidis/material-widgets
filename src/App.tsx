import { useEffect } from "react";
import {
  createTheme,
  ThemeProvider,
  Box,
  Container,
  Typography,
  Divider,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Widget from "./widget/Widget";
import { HexColor } from "./utils/enums";
import useStore from "./stores/useStore";
import "./App.css";

const App = () => {
  const { endpoint, widgetData, setWidgetData } = useStore();

  useEffect(() => {
    fetchWidgets();
  }, []);

  const fetchWidgets = async () => {
    try {
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };
      const response = await fetch(endpoint, requestOptions);
      if (response.ok) {
        const data = await response.json();
        setWidgetData(data);
      } else {
        console.error("Failed to fetch widget data: ", response.status);
      }
    } catch (error) {
      console.error("Error while fetching widget data: ", error);
    }
  };

  const theme = createTheme({
    typography: {
      fontFamily: ["Cabin", "sans-serif"].join(","),
    },
  });

  const widgets = widgetData.map(
    ({ id, type, amount, action, active, linked, selectedColor }) => {
      return (
        <Widget
          key={id}
          id={id}
          type={type}
          amount={amount}
          action={action}
          active={active}
          linked={linked}
          selectedColor={selectedColor}
        />
      );
    }
  );

  const matches = useMediaQuery("(max-width:600px)");

  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F9F9F9",
          padding: `5px 0 ${matches ? "25px" : "100px"} 0`,
          boxShadow: "10px 10px 10px lightgrey",
          width: "fit-content",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: `${matches ? "center" : "flex-start"}`,
            justifyContent: "center",
            padding: "0 10px",
            flexWrap: "wrap",
          }}
        >
          <Typography
            sx={{ color: HexColor.Black, fontSize: "30px", fontWeight: "700" }}
          >
            Per product widgets
          </Typography>
          <Divider
            sx={{
              height: "20px",
              margin: "-10px 0 20px 0",
              color: "#B0B0B0",
              width: "97%",
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: `${matches ? "column" : "row"}`,
              justifyContent: `${!matches ? "space-between" : "start"}`,
              gap: "25px",
              padding: `${matches ? "0 20px" : "0"}`,
            }}
          >
            {widgets}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
