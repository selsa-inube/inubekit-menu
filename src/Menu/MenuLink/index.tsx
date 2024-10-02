import { Text } from "@inubekit/text";
import { Icon } from "@inubekit/icon";
import { Stack } from "@inubekit/stack";
import { MenuLinkSpacingType } from "./props";
import { StyledMenuLinkContainer } from "./styles";

interface IMenuLink {
  title: string;
  description?: string;
  spacing?: MenuLinkSpacingType;
  iconBefore?: React.JSX.Element;
  iconAfter?: React.JSX.Element;
  disabled?: boolean;
  path?: string;
  onClick?: () => void;
}

function MenuLink(props: IMenuLink) {
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
    <StyledMenuLinkContainer
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
    </StyledMenuLinkContainer>
  );
}

export { MenuLink };
export type { IMenuLink };
