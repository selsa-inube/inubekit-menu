import { Text } from "@inubekit/text";

interface IMenuHeading {
  title: string;
}

function MenuHeading(props: IMenuHeading) {
  const { title } = props;

  return (
    <Text
      type="title"
      size="small"
      appearance="gray"
      padding="16px 16px 8px 16px"
    >
      {title}
    </Text>
  );
}

export { MenuHeading };
export type { IMenuHeading };
