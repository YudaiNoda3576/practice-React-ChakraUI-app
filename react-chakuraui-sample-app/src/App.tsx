import React from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Button color="primary" borderRadius="none">
        テスト
      </Button>
    </ChakraProvider>
  );
}

export default App;
