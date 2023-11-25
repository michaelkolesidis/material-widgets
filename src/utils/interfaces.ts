import { Type, Action, Color } from "./enums";

export interface WidgetProperties {
  id: number;
  type: Type;
  amount: number;
  action: Action;
  active: boolean;
  linked: boolean;
  selectedColor: Color;
}
