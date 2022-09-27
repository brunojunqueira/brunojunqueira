import { useState } from 'react'
import { useRouter } from "next/router";
import useTranslation from 'next-translate/useTranslation'

import { Divider, Flex, Text } from "@chakra-ui/react";

import ThemeToggler from "components/ThemeToggler";
import Logo from "components/Logo";
import { Translations } from 'components/Translations';
import Link from 'next/link';

interface HeaderProps {

}

interface TabProps{
    title: string
    href: string
    action: () => void
    newTab?: boolean
    selected?: boolean
    
}

const Tabs = [ 'about', 'projects', 'skills' ]

const Tab = ({ title, href, action, selected = false, newTab = false} : TabProps) => {

    return(
        <Link
            onClick={ () => action() }
            href={href}
            scroll
        >
            <Text
                as={"a"}
                target={ newTab ? '_blank' : '' }
                
                fontSize={18}
                fontWeight="semibold"
                borderColor="prussianBlue"
                borderBottom={selected ?  "solid 3px" : ""}
                cursor="pointer"
                _hover={ selected ? {} : { borderBottom: "solid 2px gray" } }
            >
                {title.toUpperCase()}
            </Text>
        </Link>
        
    )
}

export default function Header( { } : HeaderProps ) {

    const { t } = useTranslation('home');

    const [ selected, setSelected ] = useState('home');

    const router = useRouter();

    return(
        <Flex
            position='sticky'
            top="0"
            direction='column'
            bg="bgColor"
            zIndex={10}
        >
            <Flex
                px={10}
                py={5}
                justifyContent="space-between"
            >
                <Logo
                    onClick={() => setSelected('home')}
                />
                
                <Flex>
                    <Flex
                        align="center"
                        gap="3"
                        mr={10}
                    >
                        { Tabs.map((tab, key)=>{
                            return(
                                <Tab
                                    key={key}
                                    title={t(tab)}
                                    href={"#"+tab}
                                    selected={selected===tab}
                                    action={()=>setSelected(tab)}
                                />
                            )
                        })}
                        <Tab
                            newTab
                            title={t("resume")}
                            href={'/'+t('resumeLink')}
                            action={()=>{}}
                        />
                    </Flex>
                    <Translations/>
                    <ThemeToggler/>
                </Flex>
                
            </Flex>
            <Divider/>
        </Flex>
    )
}