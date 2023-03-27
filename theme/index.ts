import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  semanticTokens: {
    colors: {
      prussianBlue: "#1F3654",
      bgColor: {
        default: "white",
        _dark: "#1A202C",
      },
      coverTextColor: {
        default: "white",
        _dark: "#1A202C",
      },
      coverShadowColor: {
        default: "#1A202C",
        _dark: "white",
      },
      invertedOutline: {
        default: "rgba(0, 0, 0, 0.3)",
        _dark: "rgba(255, 255, 255, 0.3)",
      },
      footerBg: {
        default: "#FFFAFA",
        _dark: "#242C3C",
      },
      footerTextColor: {
        default: "rgba(0, 0, 0, 0.6)",
        _dark: "rgba(255, 255, 255, 0.6)",
      },
    },
  },
});

export default theme;
