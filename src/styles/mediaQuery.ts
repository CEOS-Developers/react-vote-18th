import { useMediaQuery } from "react-responsive";

export default function MediaQuery() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return { isDesktop, isTablet, isMobile };
}
