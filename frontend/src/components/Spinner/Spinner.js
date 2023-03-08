import { Flex, Spinner, Text } from "@chakra-ui/react";
import React from "react";

export default function CustomSpinner() {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      flex={1}
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="green.500"
        size="xl"
      />
      <Text my={2} color="#fff">
        loading...
      </Text>
    </Flex>
  );
}
