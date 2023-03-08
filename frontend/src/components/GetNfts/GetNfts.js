import { useAccount, useNetwork } from "wagmi";
import { useEffect, useState } from "react";
import axios from "axios";
import { Flex, Grid } from "@chakra-ui/react";
import CustomCard from "../Card/Card";
import EmptyCard from "../Card/EmptyCard";
import CustomSpinner from "../Spinner/Spinner";
import NotFound from "../NotFound/NotFound";
import CustomAlert from "../Alert/Alert";
import Layout from "../Layout";

export default function GetNfts() {
  const [nfts, setNfts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setloading] = useState(false);
  const { address } = useAccount();
  const { chain } = useNetwork();

  useEffect(() => {
    async function getData() {
      setloading(true);
      try {
        const { data } = await axios.get(`http://localhost:5001/getnfts`, {
          params: { address, chain: chain.id },
        });
        setloading(false);
        setNfts(data.data.result);
      } catch (err) {
        setloading(false);
        setError(err.response.data);
      }
    }
    getData();
  }, [address, chain?.id]);

  if (loading) {
    return <CustomSpinner />;
  }

  return (
    <Layout>
      <Flex
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="space-between"
        minH="84.4vh"
      >
        {error && <CustomAlert status="error" error={error} />}

        {nfts.length === 0 && !loading ? (
          <NotFound />
        ) : (
          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={6}
            p={4}
          >
            {nfts.map((nft, index) => {
              if (!nft.metadata) {
                return (
                  <Flex
                    justifyContent="space-between"
                    alignItems="flex-start"
                    flex={1}
                    key={index}
                  >
                    <EmptyCard />
                  </Flex>
                );
              }
              return nft.metadata && <CustomCard uri={nft} key={index} />;
            })}
          </Grid>
        )}
      </Flex>
    </Layout>
  );
}
