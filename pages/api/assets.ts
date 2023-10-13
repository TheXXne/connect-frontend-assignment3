/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from "next";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";

const ADMIN_PRIVATE_KEY = process.env.ADMINACCOUNT_PRIVATE_KEY;
const NETWORK: string = "ethereum";
const AZUKI_SMARTCONTRACT_ADDRESS: string =
  "0xED5AF388653567Af2F388E6224dC7C4b3241C544";
const CLO_CERTI_SMARTCONTRACT_ADDRESS: string =
  "0x0669E8C36635fce3f26cE510713ccA769ecF8B88";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const sdk = new ThirdwebSDK(NETWORK);
    const contract = await sdk.getContract(AZUKI_SMARTCONTRACT_ADDRESS);
    const assets = await contract.erc721.getAll();
    res.status(200).json({ assets });
  } else if (req.method === "POST") {
    res.status(200).json({ message: "POST" });
  } else {
    res.status(500).json({ message: "wrong connection" });
  }
};
