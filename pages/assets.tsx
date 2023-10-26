import type { NextPage } from 'next';
import axios from 'axios';
import Header from '../src/components/assets/Header';
import { NFT } from '@thirdweb-dev/sdk';
import styled from '@emotion/styled';
import AssetCard from '../src/components/assets/AssetCard';

const Assets: NextPage = ({ assets }: any) => {
  return (
    <div>
      <Header />
      <ListingWarp>
        <div>
          {assets.map((asset: any) => (
            <AssetCard asset={asset} key={asset.id} />
          ))}
        </div>
      </ListingWarp>
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

const ListingWarp = styled.div`
  margin: 36px 0;
  padding: 0 32px;
  align-items: flex-start;
  max-width: 100%;
  vertical-align: inherit;
  min-height: 0;
  min-width: 0;
  flex-shrink: 0;
  flex-direction: column;
  flex-basis: auto;
  display: flex;
  flex-flow: row;
`;
