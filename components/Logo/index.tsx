import { MouseEventHandler } from 'react'

import { Flex, keyframes, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

const animationKeyFrames = keyframes`
    0%{
        opacity: 1
    }    
    49%{
        opacity: 1
    }
    50%{
        opacity: 0
    }
    99%{
        opacity: 0
    }
`

const animation = `${animationKeyFrames} 1s infinite`

interface LogoProps{
    onClick?: MouseEventHandler<HTMLParagraphElement>
}

export default function Logo({onClick} : LogoProps,){

    const router = useRouter();

    return(
        <>
            <Text
                as={Flex}
                fontSize={24}
                fontWeight="bold"
                userSelect="none"
                cursor="pointer"
                onClick={ (e) => { onClick && onClick(e); router.push('/'); } }
            >
                {'>'}
                <Text
                    fontSize={24}
                    fontWeight="bold"
                    userSelect="none"
                    cursor="pointer"
                    mr="2"
                    animation={animation}
                >
                    _
                </Text>
                Bruno Junqueira
            </Text>
        </>
    )
}