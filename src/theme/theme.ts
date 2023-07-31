import { PaletteMode } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    navBgColor?: string;
    videoInfo?: string;
  }

  interface PaletteOptions {
    navBgColor?: string;
    videoInfo?: string;
  }
}

export const getColorPalette = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          navBgColor: "white",
          videoInfo: "#606060",
        }
      : {
          navBgColor: "black",
          videoInfo: "#aaaaaa",
        }),
  },
});
