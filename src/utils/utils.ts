import { Color, HexColor } from "./enums";

export const colorMappings: Record<Color, HexColor> = {
  [Color.Blue]: HexColor.Blue,
  [Color.Green]: HexColor.Green,
  [Color.Beige]: HexColor.Beige,
  [Color.White]: HexColor.White,
  [Color.Black]: HexColor.Black,
};

export const getHexColor = (color: Color): HexColor => {
  const hexColor = colorMappings[color];
  if (hexColor === undefined) {
    throw new Error("Invalid color");
  }
  return hexColor;
};
