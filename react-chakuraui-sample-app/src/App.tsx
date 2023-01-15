import React from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Button color="primary" borderRadius="none">
        テスト
      </Button>
    </ChakraProvider>
  );
}

export default App;