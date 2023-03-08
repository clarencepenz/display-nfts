import { useState } from "react";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import PurchaseModal from "../PurchaseModal/PurchaseModal";

export default function CustomCard(props) {
  const [nft] = useState(JSON.parse(props.uri.metadata));
  const [nftImage] = useState(() => {
    if (nft?.image) {
      return nft.image.includes("ipfs")
        ? `https://ipfs.io/ipfs/${nft.image.split("ipfs://")[1]}`
        : nft.image.split("\\")[0];
    }
  });

  return (
    <motion.div whileHover={{ scale: 1.01 }}>
      <Card maxW="full" w="full">
        <CardHeader p={0} bg="#fff">
          <Box h="300px" w="full">
            <Image
              objectFit="contain"
              fallbackSrc="https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png"
              src={nftImage}
              w="full"
              h="full"
              alt={nft.name} 
            />
          </Box>
        </CardHeader>
        <CardBody bg="#2d3748" color="#fff">
          <Text py={4} fontWeight="600" fontSize="md" h="60px">
            {nft.name || "No NFT title can be shown."}
          </Text>
          <Text py={4} fontWeight="600" fontSize="md" h="60px">
            {props.uri.symbol || "No symbol"}
          </Text>
        </CardBody>

        <CardFooter bg="#2d3748" color="#fff">
          <PurchaseModal
            nftImage={nftImage}
            name={nft.name}
            description={nft.description}
            owner={props.uri.owner_of}
            tokenAddress={props.uri.token_address}
            tokenId={props.uri.token_id}
          />
        </CardFooter>
      </Card>
    </motion.div>
  );
}
