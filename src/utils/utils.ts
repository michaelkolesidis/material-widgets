import { Color, HexColor } from "./enums";

const colorMappings: Record<Color, HexColor> = {
  [Color.White]: HexColor.White,
  [Color.Black]: HexColor.Black,
  [Color.Blue]: HexColor.Blue,
  [Color.Green]: HexColor.Green,
  [Color.Beige]: HexColor.Beige,
};

export const getColor = (color: Color): HexColor => {
  const hexColor = colorMappings[color];
  if (hexColor === undefined) {
    throw new Error("Invalid color");
  }
  return hexColor;
};
