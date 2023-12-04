import type { Preview } from "@storybook/react";
import previewDecorators from "./preview-decorators";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: previewDecorators,
};

export default preview;
