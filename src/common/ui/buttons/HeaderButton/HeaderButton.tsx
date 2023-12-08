import theme from "@/styles/theme";
import Button, { ButtonProps } from "../Button/Buttons";

export default function HeaderButton({
  width,
  bgColor,
  children,
  addClass,
}: Omit<ButtonProps, "height">) {
  return (
    <Button
      width={width}
      height="4rem"
      bgColor={bgColor}
      addClass={
        `border-radius:2rem; ${theme.fontStyles.body0}; font-weight:400;` +
        addClass
      }
    >
      {children}
    </Button>
  );
}
