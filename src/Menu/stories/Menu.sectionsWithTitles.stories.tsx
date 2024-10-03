import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Menu } from "..";
import { MenuUser } from "../MenuUser";
import { MenuSection } from "../MenuSection";
import {
  MdLogout,
  MdOutlineSavings,
  MdOutlineAccountBalance,
  MdOutlineAccountBalanceWallet,
  MdAttachMoney,
} from "react-icons/md";
import { MenuAction } from "../MenuAction";
import { MenuLink } from "../MenuLink";

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

export const sectionsWithTitles: StoryFn = () => (
  <Menu>
    <MenuUser userName="Name" businessUnit="Business Unit" avatar />
    <MenuSection title="ADMINISTRATE" divider spacing="wide">
      <MenuLink
        title="My savings"
        path="/my-savings"
        iconBefore={<MdOutlineSavings />}
      />
      <MenuLink
        title="My credits"
        path="/my-credits"
        iconBefore={<MdOutlineAccountBalance />}
      />
    </MenuSection>
    <MenuSection title="REQUEST" divider spacing="wide">
      <MenuLink
        title="Savings"
        path="/savings"
        iconBefore={<MdOutlineAccountBalanceWallet />}
      />
      <MenuLink title="Credit" path="/credit" iconBefore={<MdAttachMoney />} />
    </MenuSection>
    <MenuSection divider spacing="wide">
      <MenuAction title="Logout" iconBefore={<MdLogout />} />
    </MenuSection>
  </Menu>
);

export default story;
