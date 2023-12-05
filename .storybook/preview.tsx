import React from "react";
import type { Preview } from "@storybook/react";
import "../src/app/index.css";

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
  decorators: [
    (Story) => (
      <section className="font-raleway">
        <Story />
      </section>
    ),
  ],
};

export default preview;
