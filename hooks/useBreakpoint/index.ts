import { useBreakpointValue } from "@chakra-ui/react";

export default function useBreakpoint() {
  const sizes = useBreakpointValue({
    base: {
      isMobile: true,
      fontSize: 14,
      titleSize: 55,
      titleSpace: 2,
      padding: 4,
    },
    md: {
      isMobile: true,
      fontSize: 14,
      titleSize: 100,
      titleSpace: 4,
      padding: 10,
    },
    lg: {
      isMobile: false,
      fontSize: 16,
      titleSize: 160,
      titleSpace: 6,
      padding: 30,
    },
  });

  return (
    sizes ?? {
      isMobile: false,
      fontSize: 14,
      titleSize: 100,
      titleSpace: 4,
      padding: 10,
    }
  );
}
