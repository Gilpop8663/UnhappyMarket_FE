import type { Meta, StoryObj } from "@storybook/react";
import CommentSortingOption from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Comment/CommentBase/CommentSortingOption",
  component: CommentSortingOption,
  parameters: {},
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof CommentSortingOption>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Popular: Story = {
  args: {
    currentOption: "popular",
  },
};

export const Newest: Story = {
  args: {
    currentOption: "newest",
  },
};
