import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { WidgetProperties } from "../utils/interfaces";
import { Color } from "../utils/enums";

type State = {
  endpoint: string;
  widgetData: Array<WidgetProperties>;
};

type Action = {
  setWidgetData: (data: Array<WidgetProperties>) => void;
  toggleLink: (widgetId: number) => void;
  setColor: (widgetId: number, widgetColor: Color) => void;
  toggleActive: (widgetId: number) => void;
};

const useStore = create<State & Action>()(
  immer((set) => ({
    /**
     * Endpoint
     */
    endpoint: "https://api.mocki.io/v2/016d11e8/product-widgets",

    /**
     * Widget data
     */
    widgetData: [],
    setWidgetData: (data: Array<WidgetProperties>) => {
      set(() => {
        return {
          widgetData: data,
        };
      });
    },

    /**
     * Update widget data
     */
    toggleLink: (widgetId: number) => {
      set((state) => {
        const widgetToUpdate = state.widgetData.find(
          (widget) => widget.id === widgetId
        );

        if (widgetToUpdate) {
          widgetToUpdate.linked = !widgetToUpdate.linked;
        }
      });
    },

    setColor: (widgetId: number, widgetColor: Color) => {
      set((state) => {
        const widgetToUpdate = state.widgetData.find(
          (widget) => widget.id === widgetId
        );

        if (widgetToUpdate) {
          widgetToUpdate.selectedColor = widgetColor;
        }
      });
    },

    toggleActive: (widgetId: number) => {
      set((state) => {
        state.widgetData = state.widgetData.map((widget) => ({
          ...widget,
          active: widget.id === widgetId ? !widget.active : false,
        }));
      });
    },
  }))
);

export default useStore;
