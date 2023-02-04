import { memo } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  isLoading?: boolean;
};
export const PrimaryButton = memo((props: Props) => {
  const { children, onClick, disabled = false, isLoading = false } = props;

  return (
    <Button
      bg={"teal.400"}
      color={"white"}
      _hover={{ opacity: 0.8 }}
      onClick={onClick}
      isLoading={isLoading}
      isDisabled={disabled || isLoading}
    >
      {children}
    </Button>
  );
});
