import React from "react";
import { Flex, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex py={4} justifyContent="center" h="100%">
      <Text fontSize={{ base: "14px", md: "16px" }} color="#fff">
        Built by Clarence with ❤️ and Chakra
      </Text>
    </Flex>
  );
}
