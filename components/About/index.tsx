import { Flex, Text } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";

export default function About() {

    const { t } = useTranslation('home');

    return (
        <Flex
            as={"section"}
            id="about"
            px="12rem"
            pt='6rem'
            direction='column'
            gap="2rem"
        >
            <Text
                borderBottom='2px solid'
                borderColor="prussianBlue"
                w='fit-content'
                fontSize={30}
                fontWeight="black"
            >
                {t('about')}
            </Text>
            <Text
                w="50rem"
            >
                {t('aboutText')}
            </Text>
        </Flex>
    )
}
