import { Flex, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import useTranslation from "next-translate/useTranslation";

import social from "data/social"

export interface SocialLinkProps {
    label: string
    link: string
    icon: string
}

const SocialLink = ({label, link, icon }: SocialLinkProps) => {
    return(
        <Flex
                align="center"
                gap={1}
                fontWeight="bold"
                cursor="pointer"
                onClick={ ()=>window.open(link, "_blank") }
            >
                <Icon icon={icon} />
                {label}
            </Flex>
    )
}

export default function Footer() {

    const { t } = useTranslation('home');

    const this_year = new Date().getFullYear();

    return (
        <Flex
            as="footer"
            bg="footerBg"
            h="12rem"
            align="center"
            justify="center"
            direction="column"
            gap={4}
            color="footerTextColor"
        >
            <Text>
                {t('footerLabel')}
            </Text>
            <Flex
                direction="column"
                align="center"
            >
                {social.map((item, key)=>{
                    return(
                        <SocialLink
                            key={key}
                            label={item.label}
                            link={item.link}
                            icon={item.icon}
                        />
                    )
                })}
            </Flex>
            <Text>
                © {this_year} • Bruno Junqueira
            </Text>
        </Flex>
    )
}
