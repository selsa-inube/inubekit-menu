import { Text } from "@inubekit/text";
import { Icon } from "@inubekit/icon";
import { Stack } from "@inubekit/stack";
import { MenuActionSpacingType } from "./props";
import { StyledMenuActionContainer } from "./styles";

interface IMenuAction {
  title: string;
  description?: string;
  spacing?: MenuActionSpacingType;
  iconBefore?: React.JSX.Element;
  iconAfter?: React.JSX.Element;
  disabled?: boolean;
  onClick?: () => void;
}

function MenuAction(props: IMenuAction) {
  const {
    title,
    description,
    spacing = "wide",
    iconBefore,
    iconAfter,
    disabled = false,
    onClick,
  } = props;

  return (
    <StyledMenuActionContainer
      $spacing={spacing}
      $disabled={disabled}
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
    </StyledMenuActionContainer>
  );
}

export { MenuAction };
export type { IMenuAction };
