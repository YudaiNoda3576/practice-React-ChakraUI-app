import React, { memo } from "react";
import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        as={"nav"}
        bg={"teal.500"}
        justify={"space-between"}
        color={"gray.50"}
        h={"50px"}
        alignItems={"center"}
        padding={{ base: 3, md: 5 }}
      >
        <Flex align={"center"} as={"a"} _hover={{ cursor: "pointer" }} mr={8}>
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }} ml={4}>
            ユーザー管理アプリ
          </Heading>
        </Flex>
        <Flex
          align={"center"}
          fontSize={"sm"}
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            <Link>ユーザー一覧</Link>
          </Box>
          <Link>設定</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer isOpen={isOpen} onClose={onClose} />
    </>
  );
});
