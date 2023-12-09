import { ReactNode } from "react";

export interface ButtonProps {
  width: string;
  height: string;
  bgColor: string;
  children: ReactNode;
  addClass: string;
}
