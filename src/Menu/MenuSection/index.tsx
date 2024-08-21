import { MenuHeading } from "../MenuHeading";
import { MenuItem } from "../MenuItem";
import { Divider } from "@inubekit/divider";
import { Stack } from "@inubekit/stack";
import { ISection } from "./props";
import { MenuItemSpacingType } from "../MenuUser/props";

interface IMenuSection {
  sections: ISection[];
  spacing?: MenuItemSpacingType;
}

function MenuSection(props: IMenuSection) {
  const { sections, spacing = "wide" } = props;

  return (
    <>
      {sections.map((section, index) => (
        <Stack key={index} width="312px" direction="column">
          {section.divider && (
            <Stack key={index} width="280px" margin="auto" direction="column">
              <Divider />
            </Stack>
          )}

          {section.title && <MenuHeading title={section.title} />}
          <Stack direction="column" gap={spacing === "compact" ? "4px" : "0px"}>
            {section.links.map((link, linkIndex) => (
              <MenuItem
                key={linkIndex}
                title={link.title}
                description={link.description}
                iconBefore={link.iconBefore}
                iconAfter={link.iconAfter}
                disabled={link.disabled}
                path={link.path}
                onClick={link.onClick}
                spacing={spacing}
              />
            ))}
          </Stack>
        </Stack>
      ))}
    </>
  );
}

export { MenuSection };
export type { IMenuSection };
