import { useState, useEffect } from "react";
import { useAccount, useConnect } from "wagmi";
import { motion } from "framer-motion";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import GetNfts from "./components/GetNfts/GetNfts";

export default function App() {
  const { isConnected } = useAccount();
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (!isConnected) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isConnected]);

  return (
    <Box bg="#0b132b">
      <Box display="flex" flexDirection="column" minH="100vh">
        {isLoggedIn ? (
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={6}
            flex={1}
            p={4}
            className="hero"
          >
            <motion.div
              animate={{ y: 10 }}
              transition={{ ease: "easeIn", duration: 4 }}
            >
              <Heading
                color="#fff"
                my={4}
                textAlign="center"
                fontSize="clamp(18px, 9vw, 62px)"
              >
                Display NFTs
              </Heading>
            </motion.div>
            {connectors.map((connector) => (
              <Button
                isDisabled={!connector.ready}
                key={connector.id}
                onClick={() => connect({ connector })}
                bg="#506dfd"
                color="#fff"
                w="200px"
                _hover={{
                  opacity: 0.7,
                }}
              >
                {connector.name}{" "} {!connector.ready && "unsupported"}{" "}
                {isLoading &&
                  connector.id === pendingConnector?.id &&
                  "connecting"}
              </Button>
            ))}
            {error && <Text color="red.200" my={2}>{error.message}</Text>}
          </Flex>
        ) : (
          <GetNfts />
        )}
      </Box>
    </Box>
  );
}
