import { StoryFn } from "@storybook/react";
import { MdAndroid } from "react-icons/md";
import { BrowserRouter } from "react-router-dom";
import { MenuSection, IMenuSection } from ".";
import { ISection, props } from "./props";

const sections: ISection[] = [
  {
    title: "Heading 1",
    links: [
      {
        title: "Title",
        description: "Description",
        path: "/",
        iconAfter: <MdAndroid />,
      },
      {
        title: "Title",
        description: "Description",
        path: "/",
        iconAfter: <MdAndroid />,
      },
    ],
    divider: true,
  },
  {
    title: "Heading 2",
    links: [
      {
        title: "Title",
        description: "Description",
        path: "/",
        iconAfter: <MdAndroid />,
      },
      {
        title: "Title",
        description: "Description",
        path: "/",
        iconAfter: <MdAndroid />,
      },
    ],
    divider: true,
  },
];

const story = {
  title: "navigation/Menu/MenuSection",
  components: [MenuSection],
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

export const Default: StoryFn<IMenuSection> = (args) => (
  <MenuSection {...args} />
);
Default.args = {
  sections: sections,
  spacing: "wide",
};

export default story;
