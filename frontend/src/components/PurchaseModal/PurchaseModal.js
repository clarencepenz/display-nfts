import React from "react";
import {
  Button,
  Flex,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useNetwork } from "wagmi";

export default function PurchaseModal({
  nftImage,
  name,
  description,
  owner,
  tokenAddress,
  tokenId,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { chain } = useNetwork();

  let network;

  switch (chain?.name.toLowerCase()) {
    case "ethereum":
      network = "ethereum";
      break;
    case "chain 56":
      network = "bsc";
      break;
    default:
      network = "matic";
  }

  return (
    <>
      <Button
        onClick={onOpen}
        w="full"
        bg="#506dfd"
        color="#fff"
        _hover={{
          opacity: 0.8,
        }}
      >
        Purchase
      </Button>

      <Modal size="4xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg="none"
          backdropFilter="auto"
          backdropInvert="20%"
          backdropBlur="2px"
        />
        <ModalContent>
          <ModalHeader>Purchase NFT</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex gap={4} flexDirection={{base: "column", md: "row"}} justifyContent="space-between" w="full">
              <Flex h="350px" flexBasis="full">
                <Image
                  objectFit="contain"
                  fallbackSrc="https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png"
                  src={nftImage}
                  h="full"
                  w="full"
                  alt={name}
                />
              </Flex>
              <Flex flexDirection="column" flexBasis="full">
                <Text fontWeight="600" fontSize="md" m={0}>
                  Name
                </Text>
                <Text fontWeight="600" fontSize="xl">
                  {name}
                </Text>
                <Text fontWeight="600" fontSize="md" mt={4}>
                  Owner
                </Text>
                <Text fontWeight="400" fontSize="12px">
                  {owner}
                </Text>
                <Text fontWeight="600" fontSize="md" mt={4}>
                  Description
                </Text>
                <Text fontWeight="400" fontSize="sm" whiteSpace="wrap">
                  {description?.slice(0, 300) || "This is a description"}
                </Text>
              </Flex>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={`https://opensea.io/assets/${network}/${tokenAddress}/${tokenId}`}
            >
              <Button colorScheme="green" mr={2} onClick={onClose}>
                Confirm
              </Button>
            </Link>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
