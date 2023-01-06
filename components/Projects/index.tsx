import { Flex, Text } from "@chakra-ui/react";
import useBreakpoint from "contexts/useBreakpoint";

import projects from "data/projects";
import useTranslation from "next-translate/useTranslation";

export interface ProjectProps {
    background: string
    name: string
    type: string
    tecs: string []
    link: string
}

const Project = ({ background, name, type, tecs, link } : ProjectProps) => {

    return(
        <Flex
            as={"a"}
            direction="column"
            h="15rem"
            w="25rem"
            bg={`url("${background}")`}
            bgSize="cover"
            bgPos="center"
            justify="end"
            borderRadius={5}
            cursor="pointer"
            _hover={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"}}
            overflow="hidden"
            outline="1px solid"
            outlineColor="invertedOutline"
            onClick={ () => window.open(link, '_blank') }
        >
            <Flex
                bg="bgColor"
                w="100%"
                h="6rem"
                align="center"
                justify="center"
                direction="column"
                boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
                visibility="hidden"
                _hover={{visibility: ""}}
            >
                <Text
                    fontWeight="black"
                    fontSize={24}
                >
                    { name }
                </Text>
                <Text

                >
                    { type }
                </Text>
                <Text
                    fontSize={12}
                >
                    {tecs.map((tec, index)=>{
                        if(index < 3 && index > 0){
                            return ", " + tec;
                        } else if(index === 0){
                            return tec;
                        }
                    })}
                    { (tecs.length > 3) && "..." }
                </Text>
            </Flex>
        </Flex>
    )
}

export default function Projects() {

    const { t } = useTranslation('home');

    const sizes = useBreakpoint();

    return (
        <Flex
            as={"section"}
            id="projects"
            px={sizes.padding}
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
                {t('projects')}
            </Text>
            <Flex
                flexWrap="wrap"
                gap="2rem"
                align="center"
                justify="center"
            >
                {projects.map((project, key)=>{
                    return(
                        <Project
                            key={key}
                            name={project.name}
                            type={project.type}
                            background={project.background}
                            tecs={project.tecs}
                            link={project.link}
                        />
                    )
                })}
            </Flex>
        </Flex>
    )
}
