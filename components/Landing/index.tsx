import { Flex, Image, Text } from "@chakra-ui/react";
import useBreakpoint from "hooks/useBreakpoint";
import useTranslation from "next-translate/useTranslation";

export default function Landing() {
  const { t } = useTranslation("home");

  const { fontSize, isMobile, titleSpace, titleSize } = useBreakpoint();

  return (
    <Flex
      as={"section"}
      id="home"
      align="center"
      justify="center"
      direction="column"
      py={10}
      bgGradient="linear(to-b, footerBg, bgColor)"
    >
      <Text fontSize={fontSize} mb={isMobile ? "2rem" : "-2rem"}>
        👋 {t("welcome")}
      </Text>
      <Flex
        direction="column"
        align="center"
        justify="center"
        fontSize={titleSize}
        fontWeight="black"
      >
        <Text
          as={"span"}
          mb={`-${titleSpace}rem`}
          color="coverTextColor"
          textShadow={`
                        -2px -2px 0 var(--chakra-colors-coverShadowColor), 
                        2px -2px 0 var(--chakra-colors-coverShadowColor), 
                        -2px 2px 0 var(--chakra-colors-coverShadowColor), 
                        2px 2px 0 var(--chakra-colors-coverShadowColor)
                    `}
        >
          FULL-STACK
        </Text>
        <Text as={"span"}>DEVELOPER</Text>
        <Image
          src="avatar.webp"
          alt="avatar"
          style={
            isMobile
              ? { width: "140px", height: "140px" }
              : { width: "240px", height: "240px" }
          }
          borderRadius="50%"
        />
      </Flex>
    </Flex>
  );
}
