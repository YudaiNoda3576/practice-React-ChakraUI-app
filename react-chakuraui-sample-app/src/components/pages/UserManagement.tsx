import { memo } from "react";
import { Box, Stack, Wrap, WrapItem, Image, Text } from "@chakra-ui/react";
import { UserCard } from "../molecules/UserCard";

export const UserManagement = memo(() => {
  return (
    <div>
      <Wrap p={{ base: 4, md: 10 }}>
        <WrapItem>
          <UserCard
            image={"https://source.unsplash.com/random"}
            userName={"一休"}
            fullName={"Yudai Noda"}
          />
        </WrapItem>
      </Wrap>
    </div>
  );
});
