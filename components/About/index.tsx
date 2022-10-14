import { Flex, Text } from "@chakra-ui/react";
import useBreakpoint from "contexts/useBreakpoint";
import useTranslation from "next-translate/useTranslation";

export default function About() {

    const { t } = useTranslation('home');

    const sizes = useBreakpoint();

    return (
        <Flex
            as={"section"}
            id="about"
            px={ sizes.padding }
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
                w="100%"
                wordBreak="break-word"
            >
                {t('aboutText')}
            </Text>
        </Flex>
    )
}
