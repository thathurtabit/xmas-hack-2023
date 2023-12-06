import type { Meta, StoryObj } from "@storybook/react";

import { GameOver } from "./game-over";
import { GameOverReason } from "./game-over.types";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Organisms/GameOver",
  component: GameOver,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    reason: {
      options: Object.values(GameOverReason),
      control: {
        type: "radio",
      }
    },
  },
} satisfies Meta<typeof GameOver>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    reason: GameOverReason.Time,
  },
};
