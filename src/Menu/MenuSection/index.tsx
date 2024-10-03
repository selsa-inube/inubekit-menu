import { MenuHeading } from "../MenuHeading";
import { Divider } from "@inubekit/divider";
import { Stack } from "@inubekit/stack";

interface IMenuSection {
  title?: string;
  children: React.ReactNode;
  divider?: boolean;
  spacing?: "wide" | "compact";
}

function MenuSection({
  title,
  children,
  divider,
  spacing = "wide",
}: IMenuSection) {
  return (
    <Stack width="312px" direction="column">
      {divider && (
        <Stack width="280px" margin="auto" direction="column">
          <Divider />
        </Stack>
      )}
      {title && <MenuHeading title={title} />}
      <Stack direction="column" gap={spacing === "compact" ? "4px" : "0px"}>
        {children}
      </Stack>
    </Stack>
  );
}

export { MenuSection };
export type { IMenuSection };
