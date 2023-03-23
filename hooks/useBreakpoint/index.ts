import { useBreakpointValue } from "@chakra-ui/react";

export default function useBreakpoint() {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const fontSize = useBreakpointValue({ base: 14, lg: 16 });
  const titleSize = useBreakpointValue({ base: 55, md: 100, lg: 160 });
  const titleSpace = useBreakpointValue({ base: 2, md: 4, lg: 6 });
  const padding = useBreakpointValue({ base: 4, md: 10, lg: 30 });

  return { isMobile, titleSize, titleSpace, fontSize, padding };
}
