import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function NotFound() {
  return (
    <Flex justifyContent="center" alignItems="center" flex={1}>
      <Text color="#fff" fontSize="28px">
        No NFT Found
      </Text>
    </Flex>
  );
}
