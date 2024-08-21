import { Text } from "@inubekit/text";
import { Icon } from "@inubekit/icon";
import { Stack } from "@inubekit/stack";
import { MenuItemSpacingType } from "./props";
import { StyledMenuItemContainer } from "./styles";

interface IMenuItem {
  title: string;
  description?: string;
  spacing?: MenuItemSpacingType;
  iconBefore?: React.JSX.Element;
  iconAfter?: React.JSX.Element;
  disabled?: boolean;
  path?: string;
  onClick?: () => void;
}

function MenuItem(props: IMenuItem) {
  const {
    title,
    description,
    spacing = "wide",
    iconBefore,
    iconAfter,
    disabled = false,
    path = "#",
    onClick,
  } = props;

  return (
    <StyledMenuItemContainer
      $spacing={spacing}
      $disabled={disabled}
      to={path}
      onClick={onClick}
    >
      <Stack gap="12px" alignItems="center">
        {iconBefore && (
          <Icon
            icon={iconBefore}
            spacing="narrow"
            size="24px"
            appearance="dark"
            disabled={disabled}
          />
        )}
        <Stack direction="column" gap="4px">
          <Text type="label" size="large" disabled={disabled} weight="bold">
            {title}
          </Text>
          <Text type="body" size="small" appearance="gray" disabled={disabled}>
            {description}
          </Text>
        </Stack>
      </Stack>
      {iconAfter && (
        <Icon
          icon={iconAfter}
          spacing="narrow"
          size="24px"
          appearance="dark"
          disabled={disabled}
        />
      )}
    </StyledMenuItemContainer>
  );
}

export { MenuItem };
export type { IMenuItem };
