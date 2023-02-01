import React, { memo } from "react";
import { Header } from "../organisms/layout/Header";
import { Outlet, useLocation } from "react-router-dom";
import { Breadcrumb, Container, Flex } from "@chakra-ui/react";

export const Layout = memo(() => {
  const location = useLocation();
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <Container maxW="container.xl" flexGrow="1">
        {location.pathname !== "/" && <Breadcrumb my={5} />}
        <Outlet />
      </Container>
    </Flex>
  );
});
