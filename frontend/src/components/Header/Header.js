import { useEffect, useState } from "react";
import { useAccount, useDisconnect } from "wagmi";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";

export default function Header() {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (isConnected) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isConnected]);

  return (
    <Box bg="#0b132b" color="#fff">
      <Flex p={4}>
        <Heading flex={1}>NFTs</Heading>
        {isLoggedIn && (
          <Flex justifyContent="flex-end" alignItems="center" gap={3}>
            <Box display={{base: "none", md: "block"}}>
              {isConnected
                ? `${address.slice(0, 4)}...${address.slice(38)}`
                : null}
            </Box>
            <Button
              bg="red"
              color="#fff"
              onClick={disconnect}
              _hover={{
                opacity: 0.7,
              }}
            >
              Disconnect
            </Button>
          </Flex>
        )}
      </Flex>
    </Box>
  );
}
