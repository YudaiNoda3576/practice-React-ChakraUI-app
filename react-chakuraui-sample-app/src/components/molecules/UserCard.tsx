import { memo } from "react";
import { Box, Image, Stack, Text } from "@chakra-ui/react";

type Props = {
  image: string;
  userName: string;
  fullName: string;
};
export const UserCard = memo((props: Props) => {
  const { image, userName, fullName } = props;

  return (
    <Box
      w="260px"
      h="260px"
      bg="white"
      borderRadius={"10px"}
      shadow={"md"}
      p={4}
      _hover={{ cursor: "pointer", opacity: 0.8 }}
    >
      <Stack textAlign={"center"}>
        <Image
          boxSize={160}
          src={image}
          alt={"random-image"}
          borderRadius={"full"}
          m={"auto"}
        ></Image>
        <Text fontSize={"lg"} fontWeight={"bold"}>
          {userName}
        </Text>
        <Text fontSize={"sm"} color={"gray.500"}>
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
});
