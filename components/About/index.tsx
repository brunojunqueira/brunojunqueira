import { Flex, Text } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";

export default function About() {

    const { t } = useTranslation('home');

    return (
        <Flex
            as={"section"}
            id="about"
            h='100vh'
            px="20rem"
            mt="2rem"
            pt='6rem'
            direction='column'
            gap="1rem"
        >
            <Text
                borderBottom='2px solid'
                borderColor="prussianBlue"
                w='fit-content'
                fontSize={24}
                fontWeight="bold"
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
