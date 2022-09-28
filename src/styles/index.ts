import { createStitches } from "@stitches/react";

export const { styled, globalCss, getCssText } = createStitches({
  theme: {
    colors: {
      white: "#fff",
      gray100: "#e1e1e6",
      gray300: "#c4c4cc",
      gray900: "#121214",

      "green-300": "#00B37E",
      "green-500": "#00875F",
      "green-700": "#015F43",
    },
    fontSizes: {
      md: "1.125rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "2rem",
    },
  },
  media: {
    sm: "(max-width: 700px)",
    md: "(max-width: 900px)",
    lg: "(max-width: 1200px)",
  },
});
