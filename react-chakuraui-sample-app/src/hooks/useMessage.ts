import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";
import { type } from "os";

type Props = {
  title: string;
  status: "success" | "error" | "warning" | "info";
};
export const useMessage = () => {
  const toast = useToast();
  const showMessage = useCallback((props: Props) => {
    const { title, status } = props;

    if (status === "success") {
      toast({
        title: title,
        status: "success",
        position: "top",
        duration: 2000,
        isClosable: true,
      });
    } else {
      toast({
        title: title,
        status: "error",
        position: "top",
        duration: 2000,
        isClosable: true,
      });
    }
  }, []);
  return { showMessage };
};
