import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import Link from "next/dist/client/link";
import { IoGlobe } from "react-icons/io5";
import useBreakpoint from "hooks/useBreakpoint";

export function Translations() {
  const sizes = useBreakpoint();

  const router = useRouter();

  const { t } = useTranslation("home");

  return (
    <Menu>
      <MenuButton
        as={Button}
        mx={2}
        w="fit-content"
        bg="prussianBlue"
        color="white"
        borderRadius={5}
        rightIcon={!sizes.isMobile && <IoGlobe />}
      >
        {t(router.locale ?? "")}
      </MenuButton>
      <MenuList>
        {router.locales?.map((locale) => (
          <Link key={locale} href={router.asPath} locale={locale}>
            <MenuItem>{t(locale)}</MenuItem>
          </Link>
        ))}
      </MenuList>
    </Menu>
  );
}
