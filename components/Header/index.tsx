import { useState } from "react";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import useBreakpoint from "hooks/useBreakpoint";

import { Divider, Flex, Text } from "@chakra-ui/react";

import ThemeToggler from "components/ThemeToggler";
import Logo from "components/Logo";
import { Translations } from "components/Translations";

interface HeaderProps {}

interface TabProps {
  title: string;
  selected: boolean;
  action: () => void;
}

const Tabs = ["about", "projects", "skills"];

const Tab = ({ title, selected, action }: TabProps) => {
  const { fontSize } = useBreakpoint();

  return (
    <Text
      onClick={() => action()}
      fontSize={fontSize}
      fontWeight="semibold"
      borderColor="prussianBlue"
      borderBottom={selected ? "solid 3px" : ""}
      cursor="pointer"
      _hover={selected ? {} : { borderBottom: "solid 2px gray" }}
    >
      {title.toUpperCase()}
    </Text>
  );
};

export default function Header({}: HeaderProps) {
  const { t } = useTranslation("home");

  const [selected, setSelected] = useState("home");

  const router = useRouter();

  const { isMobile, padding } = useBreakpoint();

  return (
    <Flex position="sticky" top="0" direction="column" bg="bgColor" zIndex={10}>
      <Flex px={padding} py={5} justifyContent="space-between">
        <Logo onClick={() => setSelected("home")} />

        <Flex>
          <Flex align="center" gap="3" mr={isMobile ? 5 : 10}>
            {!isMobile &&
              Tabs.map((tab, key) => {
                return (
                  <Tab
                    key={key}
                    title={t(tab)}
                    selected={selected === tab}
                    action={() => {
                      setSelected(tab);
                      router.push("/#" + tab);
                    }}
                  />
                );
              })}
            <Tab
              title={t("resume")}
              action={() => window.open("/" + t("resumeLink"), "_blank")}
              selected={selected === "resume"}
            />
          </Flex>
          <Translations />
          <ThemeToggler />
        </Flex>
      </Flex>
      <Divider />
    </Flex>
  );
}
