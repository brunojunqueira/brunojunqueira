import { Flex, Text, Tooltip } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";

import { Icon } from '@iconify/react';

import themes from "data/skills"
import useBreakpoint from "contexts/useBreakpoint";

interface SkillProps {
    name: string
    icon: string
}

export interface ThemeProps{
    title: string
    skills: SkillProps []
}

const Theme = ({ title, skills } : ThemeProps) => {
    return(
        <Flex
            direction="column"
            gap={10}
        >
            <Text
                w='fit-content'
                fontSize={24}
                fontWeight="bold"
            >
                { title }
            </Text>
            <Flex
                fontSize={38}
                gap={5}
                flexWrap="wrap"
            >
                {skills.map((skill, key)=>{
                    return(
                        <Tooltip
                            key={key}
                            label={skill.name}
                        >
                            <Icon 
                                icon={skill.icon}
                            />
                        </Tooltip>
                        
                    )
                })}
            </Flex>
        </Flex>
    )
}

export default function Skills() {

    const { t } = useTranslation('home');

    const sizes = useBreakpoint();
    
    return (
        <Flex
                as={"section"}
                id="skills"
                px={sizes.padding}
                py='6rem'
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
                    {t('skills')}
                </Text>
                <Flex
                    direction="column"
                    justify="center"
                    gap="4rem"
                >
                    { themes.map((theme, key)=>{
                        return(
                            <Theme
                                key={key}
                                title={theme.title}
                                skills={theme.skills}                
                            />
                        )
                    }) }
                </Flex>
            </Flex>
    )
}
