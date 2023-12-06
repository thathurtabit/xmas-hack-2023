import type { Meta, StoryObj } from "@storybook/react";

import { MockedNotifications } from "./notifications.stories.mock";
import { XmasHackProvider } from "@/context/context/context";
import { Notifications } from "./notifications";

const meta = {
  title: "Molecules/Notifications",
  component: Notifications,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  render: (args) => (
    <XmasHackProvider>
      <MockedNotifications {...args} />
    </XmasHackProvider>
  ),
} satisfies Meta<typeof Notifications>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
