import { memo } from "react";
import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const Login = memo(() => {
  return (
    <Flex justifyContent={"center"} height={100} align={"center"}>
      <Box bg={"white"} p={4} w={"sm"} borderRadius={"md"} shadow={"md"}>
        <Heading
          as="h1"
          size={"lg"}
          textAlign={"center"}
          fontSize={{ base: "md", md: "lg" }}
          ml={4}
        >
          ユーザー管理アプリ
        </Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input placeholder={"ユーザーID"} />
          <PrimaryButton>ログイン</PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
