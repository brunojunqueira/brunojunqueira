import { Button, Flex, Image, Text } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";

export default function Landing() {

    const { t } = useTranslation('home'); 

    return (
        <Flex
            as={"section"}
            id='home'
            align='center'
            justify='center'
            direction='column'
            px={5}
            py={10}
        >
            <Text
                fontSize={20}
            >
                👋 {t('welcome')}
            </Text>
            <Flex
                direction='column'
                align='center'
                justify='center'
                fontSize={150}
                fontWeight="black"
            >
                <Text
                    as={"span"}
                    mb="-6rem"
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
                src="avatar.jpg" 
                alt="avatar"
                h="15rem"
                borderRadius='50%'
            />
            <Button
                zIndex={1}
                mt='2rem'
                bg="coverShadowColor"
                color="coverTextColor"
                _hover={{bg:"#1F3654", color:"#FFF"}}
            >
                {t('resume')}
            </Button>
        </Flex>
    )
}
