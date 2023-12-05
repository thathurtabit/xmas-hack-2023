import type { Meta, StoryObj } from "@storybook/react";

import { Modal } from "./modal";
import { XmasHackProvider } from "@/context/context/context";
import { MockedModal } from "./modal.stories.mock";

const meta = {
  title: "Molecules/Modal",
  component: MockedModal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  render: (args) => (
    <XmasHackProvider>
      <MockedModal {...args} />
    </XmasHackProvider>
  ),
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
