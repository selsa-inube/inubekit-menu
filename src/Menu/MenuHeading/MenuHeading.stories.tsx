import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { IMenuHeading, MenuHeading } from ".";
import { props } from "./props";
import { JSX } from "react/jsx-runtime";

const story = {
  title: "navigation/Menu/MenuHeading",
  components: [MenuHeading],
  tags: ["autodocs"],
  argTypes: {
    ...props,
  },
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export const Default: StoryFn<IMenuHeading> = (
  args: JSX.IntrinsicAttributes & IMenuHeading,
) => <MenuHeading {...args} />;
Default.args = {
  title: "Title",
};

export default story;
