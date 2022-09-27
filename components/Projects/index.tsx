import { Flex, Text } from "@chakra-ui/react";

import projects from "data/projects";
import useTranslation from "next-translate/useTranslation";

export default function Projects() {

    const { t } = useTranslation('home');

  return (
    <Flex
        as={"section"}
        id="projects"
        px="12rem"
        pt='6rem'
        direction='column'
        gap="2rem"
    >
        <Text
            borderBottom='2px solid'
            borderColor="prussianBlue"
            w='fit-content'
            fontSize={24}
            fontWeight="bold"
        >
            {t('projects')}
        </Text>
    </Flex>
  )
}
