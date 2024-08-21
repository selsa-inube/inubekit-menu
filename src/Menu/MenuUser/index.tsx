import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { Avatar } from "@inubekit/avatar";
import { StyledUser } from "./styles";

interface IMenuUser {
  userName: string;
  businessUnit?: string;
  avatar?: boolean;
}

function MenuUser(props: IMenuUser) {
  const { userName, businessUnit, avatar = true } = props;

  return (
    <StyledUser>
      {avatar && (
        <Stack direction="column" justifyContent="center" alignItems="center">
          <Avatar />
        </Stack>
      )}
      <Stack direction="column" justifyContent="center">
        <Text type="body" size="medium">
          {userName}
        </Text>
        <Text type="body" size="small" appearance="gray">
          {businessUnit}
        </Text>
      </Stack>
    </StyledUser>
  );
}

export { MenuUser };
export type { IMenuUser };
