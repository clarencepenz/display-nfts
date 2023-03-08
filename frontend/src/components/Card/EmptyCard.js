import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function EmptyCard() {
  return (
    <motion.div whileHover={{ scale: 1.01 }}>
      <Card maxW="full" w="full">
        <CardHeader p={0} bg="#fff" color="">
          <Box h="300px" w="full">
            <Image
              objectFit="cover"
              fallbackSrc="https://oxalus.io/thumbp/collection.png"
              src="https://cdn.vox-cdn.com/thumbor/fmS3chd4D5M3qebwkkcm4sn8X98=/0x0:2050x1367/1400x788/filters:focal(1025x684:1026x685)/cdn.vox-cdn.com/uploads/chorus_asset/file/22397464/VRG_ILLO_4489_003.jpg"
              h="full"
              w="full"
              alt="No MetaData found"
            />
          </Box>
        </CardHeader>
        <CardBody bg="#2d3748" color="#fff">
          <Text py={4} fontWeight="600" fontSize="md" h="60px">
            MetaData not found
          </Text>
          <Text py={4} fontWeight="600" fontSize="md" h="60px">
            ⚠️
          </Text>
        </CardBody>
        <CardFooter bg="#2d3748" color="#fff">
          <Button isDisabled={true} w="full" bg="#506dfd" color="#fff">
            Purchase
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
