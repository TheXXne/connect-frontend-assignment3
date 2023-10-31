import type { NextApiRequest, NextApiResponse } from 'next';
import { NFT, ThirdwebSDK } from '@thirdweb-dev/sdk';
import { AxiosError } from 'axios';

const NETWORK: string = 'ethereum';
const AZUKI_SMARTCONTRACT_ADDRESS: string = '0xED5AF388653567Af2F388E6224dC7C4b3241C544';
const SDK = new ThirdwebSDK(NETWORK);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const contract = await SDK.getContract(AZUKI_SMARTCONTRACT_ADDRESS);
  if (req.method === 'GET') {
    if (req.query.tokenId) {
      const tokenId: number = Number(req.query.tokenId);
      const asset = await contract.erc721.get(tokenId);
      res.status(200).json({ asset });
    } else {
      const assets = await contract.erc721.getAll();
      res.status(200).json({ assets });
    }
  } else if (req.method === 'POST') {
    res.status(200).json({ message: 'POST' });
  } else {
    res.status(500).json({ message: 'wrong connection' });
  }
};

export const getAllAssets = async (): Promise<{ assets: NFT[] } | { error: AxiosError }> => {
  const contract = await SDK.getContract(AZUKI_SMARTCONTRACT_ADDRESS);
  return contract.erc721
    .getAll()
    .then(res => ({ assets: res }))
    .catch(error => ({ error: error }));
};

export const getAssetMetadata = async (tokenId: string) => {
  const contract = await SDK.getContract(AZUKI_SMARTCONTRACT_ADDRESS);
  await contract.erc721
    .get(tokenId)
    .then(res => ({
      assets: res,
    }))
    .catch(error => ({ error }));
};
