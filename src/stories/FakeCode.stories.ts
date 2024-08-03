import type { Meta, StoryObj } from "@storybook/react";
import { FakeCode } from "../../dist/index";

const meta: Meta<typeof FakeCode> = {
  component: FakeCode,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof FakeCode>;

export const Default: Story = {};

export const Custom: Story = {
  args: {
    colors: ["#119DA4", "#0C7489", "#13505B"],
    animationTime: 6,
    maxIndent: 5,
    minLines: 10,
    maxLines: 12,
    minWordWidth: 40,
    maxWordWidth: 60,
    wordStyle: {
      height: 24,
      borderRadius: "0 0",
      margin: 6,
    },
    tabWidth: 40,
  },
};
