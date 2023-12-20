import { useEffect, useRef } from "react";

export default function useBlurWhenScroll<U extends HTMLElement>() {
  const ref = useRef<U | null>(null);
  const handleScroll = () => {
    if (ref.current) {
      if (window.scrollY > 50) {
        ref.current.style.backdropFilter = "blur(5px)";
      } else {
        ref.current.style.backgroundColor = "transparent";
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { ref };
}
