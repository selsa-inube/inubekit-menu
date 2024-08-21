import { StoryFn } from "@storybook/react";
import { MdAndroid } from "react-icons/md";
import { BrowserRouter } from "react-router-dom";
import { IMenuItem, MenuItem } from ".";
import { props } from "./props";

const story = {
  title: "navigation/Menu/MenuItem",
  components: [MenuItem],
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

export const Default: StoryFn<IMenuItem> = (args) => <MenuItem {...args} />;
Default.args = {
  title: "Title",
  description: "Description",
  iconBefore: <MdAndroid />,
  spacing: "wide",

  disabled: false,
};

export const IconAfter: StoryFn<IMenuItem> = (args) => <MenuItem {...args} />;
IconAfter.args = {
  title: "Title",
  description: "Description",
  iconAfter: <MdAndroid />,
  spacing: "wide",
  disabled: false,
};

export const Disabled: StoryFn<IMenuItem> = (args) => <MenuItem {...args} />;
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export default story;
