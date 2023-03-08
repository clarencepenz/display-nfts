const express = require("express");
const app = express();
const port = 5001;
const Moralis = require("moralis").default;
const cors = require("cors");

require("dotenv").config({ path: ".env" });

app.use(cors());
app.use(express.json());

const MORALIS_API_KEY = process.env.MORALIS_API_KEY;

app.get("/getnfts", async (req, res) => {
  try {
    const { query } = req;

    const response = await Moralis.EvmApi.nft.getWalletNFTs({
      address: query.address,
      chain: query.chain,
    });

    return res.status(200).json({
      status: "success",
      data: response,
    });

  } catch (error) {
    return res.status(400).json({
      status: "error",
      data: error,
      message: "Server Error! Reload page"
    });
  }
});

Moralis.start({
  apiKey: MORALIS_API_KEY,
})
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening for API Calls`);
    });
  })
  .catch((err) => console.log(err));
