import type { Meta, StoryObj } from "@storybook/react";
import { IconStarFilled } from "./star-filled";

const meta: Meta<typeof IconStarFilled> = {
  title: "Icons/Icon Star Filled",
  component: IconStarFilled,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;

type Story = StoryObj<typeof IconStarFilled>;

export const Default: Story = { ...meta, args: { size: "2rem" } };
