import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation'

import { Flex, Text } from '@chakra-ui/react';
import Link from 'next/dist/client/link';
import {IoGlobe} from "react-icons/io5"

export function Translations() {
    
    const router = useRouter();
    const {t} = useTranslation('home');

    return (
        <Flex
            align='center'
            gap={2}
            mr={5}
        >
            <IoGlobe/>
            {router.locales?.map(locale => (
                <Text key={locale}>
                    <Link href={router.asPath} locale={locale}>
                        <a>
                            {(locale === 'en-US') ? t('english') : t('portuguese')}
                        </a>
                    </Link>
                </Text>
            ))}
        </Flex>
    );
}
