import { extendTheme } from "@chakra-ui/react";

export const main = extendTheme({
    semanticTokens: {
        colors: {
            prussianBlue: "#1F3654",
            bgColor:{
                default: "white",
                _dark: "#1A202C"
            },
            coverTextColor:{
                default: "white",
                _dark: "#1A202C"
            },
            coverShadowColor:{
                default: "#1A202C",
                _dark: "white"
            },
        },
    },
})