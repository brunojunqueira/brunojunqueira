import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

import { Flex, useColorMode } from "@chakra-ui/react";

import { IoSunny, IoMoon } from "react-icons/io5";

export default function ThemeToggler() {
  const [cookie, setCookie, removeCookie] = useCookies(["dark"]);
  const { setColorMode } = useColorMode();
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (cookie["dark"]) {
      setDark(cookie["dark"]);
      setColorMode("dark");
    }
  }, []);

  const handleToggleColorMode = () => {
    if (!dark) {
      setCookie("dark", true);
      setColorMode("dark");
      setDark(true);
    } else {
      removeCookie("dark");
      setColorMode("light");
      setDark(false);
    }
  };

  return (
    <Flex
      alignItems="center"
      gap="2"
      onClick={handleToggleColorMode}
      cursor="pointer"
    >
      {dark ? <IoMoon size={24} /> : <IoSunny size={24} />}
    </Flex>
  );
}
