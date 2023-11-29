import React from "react";
import { Decorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../src/styles/theme";
import GlobalStyles from "../src/styles/GlobalStyles";

const previewDecorator: Decorator = (Story, context) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story {...context} />
    </ThemeProvider>
  );
};

export default [previewDecorator];
