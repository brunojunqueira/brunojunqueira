import { Button, Flex, Image, Text } from "@chakra-ui/react";
import useBreakpoint from "contexts/useBreakpoint";
import useTranslation from "next-translate/useTranslation";

export default function Landing() {

    const { t } = useTranslation('home'); 

    const sizes = useBreakpoint();

    return (
        <Flex
            as={"section"}
            id='home'
            align='center'
            justify='center'
            direction='column'
            py={10}
        >
            <Text
                fontSize={sizes.fontSize}
                mb={sizes.isMobile ? "2rem" : "-2rem"}
            >
                👋 {t('welcome')}
            </Text>
            <Flex
                direction='column'
                align='center'
                justify='center'
                fontSize={sizes.titleSize}
                fontWeight="black"
            >
                <Text
                    as={"span"}
                    mb={`-${sizes.titleSpace}rem`}
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
                <Text
                    as={"span"}
                >
                    DEVELOPER
                </Text>
            </Flex>
            <Image 
                src="avatar.png" 
                alt="avatar"
                h="15rem"
                borderRadius='50%'
            />
        </Flex>
    )
}
