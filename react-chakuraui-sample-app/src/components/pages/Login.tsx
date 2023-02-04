import { ChangeEvent, memo, useState } from "react";
import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { useAuth } from "../../hooks/useAuth";

export const Login = memo(() => {
  const [userId, setUserId] = useState("");
  const { login, loading } = useAuth();
  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };
  const onClickLogin = () => login(userId);

  return (
    <Flex justifyContent={"center"} height={500} align={"center"}>
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
          <Input
            placeholder={"ユーザーID"}
            value={userId}
            onChange={onChangeUserId}
          />
          <PrimaryButton
            onClick={onClickLogin}
            isLoading={loading}
            disabled={userId === ""}
          >
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
