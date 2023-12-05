import type { Meta, StoryObj } from "@storybook/react";
import { IconStarOutline } from "./star-outline";

const meta: Meta<typeof IconStarOutline> = {
  title: "Icons/Icon Star Outline",
  component: IconStarOutline,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;

type Story = StoryObj<typeof IconStarOutline>;

export const Default: Story = { ...meta, args: { size: "2rem" } };
