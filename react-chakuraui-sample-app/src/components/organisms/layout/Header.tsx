import React, { memo } from "react";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

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
        <IconButton
          aria-label={"Open Menu"}
          size={"sm"}
          icon={<HamburgerIcon />}
          display={{ base: "block", md: "none" }}
          variant={"none"}
          onClick={onOpen}
        />
      </Flex>
      <Drawer placement={"left"} size={"xs"} isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody p={0} bg={"gray.100"}>
              <Button w={"100%"}>TOP</Button>
              <Button w={"100%"}>ユーザー管理</Button>
              <Button w={"100%"}>設定</Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
});
