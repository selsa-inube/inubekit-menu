import { MenuUser } from "./MenuUser";
import { MenuSection } from "./MenuSection";
import { ISection } from "./MenuSection/props";
import { StyledMenuContainer } from "./styles";
import { MenuActionSpacingType } from "./MenuAction/props";

interface IMenu {
  userName: string;
  sections: ISection[];
  businessUnit?: string;
  avatar?: boolean;
  spacing?: MenuActionSpacingType;
}

function Menu(props: IMenu) {
  const { userName, businessUnit, avatar, sections, spacing } = props;

  return (
    <StyledMenuContainer>
      <MenuUser
        userName={userName}
        businessUnit={businessUnit}
        avatar={avatar}
      />
      <MenuSection sections={sections} spacing={spacing} />
    </StyledMenuContainer>
  );
}

export { Menu };
export type { IMenu };
