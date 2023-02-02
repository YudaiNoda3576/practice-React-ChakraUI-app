import React, { memo } from "react";
import { IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

type Props = {
  onOpen: () => void;
};
export const MenuIconButton = memo((props: Props) => {
  const { onOpen } = props;
  return (
    <IconButton
      aria-label={"Open Menu"}
      size={"sm"}
      icon={<HamburgerIcon />}
      display={{ base: "block", md: "none" }}
      variant={"none"}
      onClick={onOpen}
    />
  );
});
