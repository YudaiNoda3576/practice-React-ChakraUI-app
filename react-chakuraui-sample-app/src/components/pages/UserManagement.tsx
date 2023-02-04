import { memo, useEffect } from "react";
import { Center, Spinner, Wrap, WrapItem } from "@chakra-ui/react";
import { UserCard } from "../molecules/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { User } from "../../types/api/user";

export const UserManagement = memo(() => {
  const { getUsers, users, loading } = useAllUsers();

  useEffect(() => getUsers(), []);
  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user: User) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                image={"https://source.unsplash.com/random"}
                userName={user.username}
                fullName={user.name}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
    </>
  );
});
