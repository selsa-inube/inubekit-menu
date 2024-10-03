import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Menu } from "..";
import { MenuUser } from "../MenuUser";
import { MenuSection } from "../MenuSection";
import { MenuAction } from "../MenuAction";

const story = {
  title: "navigation/Menu",
  components: [Menu],
  tags: ["autodocs"],
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export const withoutIcons: StoryFn = () => (
  <Menu>
    <MenuUser userName="Name" businessUnit="Business Unit" avatar />
    <MenuSection divider spacing="wide">
      <MenuAction title="Show the nearest calendar" />
      <MenuAction title="Add a secondary incident" />
      <MenuAction title="Link a new issue " />
    </MenuSection>

    <MenuSection divider spacing="wide">
      <MenuAction title="Logout" />
    </MenuSection>
  </Menu>
);

export default story;
