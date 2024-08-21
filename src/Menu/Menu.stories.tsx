import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Menu, IMenu } from ".";
import { MdLogout } from "react-icons/md";
import { props } from "./props";

const story = {
  title: "navigation/Menu",
  components: [Menu],
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

export const Default: StoryFn<IMenu> = (args) => <Menu {...args} />;
Default.args = {
  userName: "Name",
  businessUnit: "Business Unit",
  spacing: "wide",
  sections: [
    {
      links: [
        {
          title: "Logout",
          path: "/",
          iconBefore: <MdLogout />,
        },
      ],
      divider: true,
    },
  ],
  avatar: true,
};

export default story;
