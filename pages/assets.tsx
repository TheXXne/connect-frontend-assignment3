import type { NextPage } from 'next';
import axios from 'axios';
import Header from '../src/components/assets/Header';
import { NFT } from '@thirdweb-dev/sdk';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Assets: NextPage = ({ assets }: any) => {
  const router = useRouter();
  return (
    <div>
      <Header />
      <div>
        <div>
          {assets.map((asset: any) => (
            <div
              className="asset-card"
              key={asset.id}
              onClick={() => {
                router.push(
                  {
                    pathname: '/assets/[tokenId]',
                    query: {
                      tokenId: asset.metadata.id,
                    },
                  },
                  '',
                );
              }}
            >
              <Image src={asset.metadata.image} alt="Asset" width="163.75" height="165.75" />
              <div>
                <h4>{asset.metadata.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const response = await axios.get('http://localhost:3000/api/assets');
  const assets: NFT[] = response.data.assets;

  return {
    props: {
      assets: assets,
    },
  };
};

export default Assets;
