import { inube } from "@inubekit/foundations";

const tokens = {
  avatar: {
    appearance: "primary",
  },
  username: {
    appearance: "dark",
  },
  client: {
    appearance: "gray",
  },
  heading: {
    appearance: "gray",
  },
  item: {
    content: "dark",
    background: {
      hover: inube.palette.neutral.N20,
      disabled: inube.palette.neutral.N20,
    },
  },
  background: {
    color: inube.palette.neutral.N0,
  },
  divider: {
    color: inube.palette.neutral.N40,
  },
};

export { tokens };
