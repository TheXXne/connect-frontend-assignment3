import type { NextPage } from 'next';
import Header from '../src/components/assets/Header';
import styled from '@emotion/styled';
import AssetCard from '../src/components/assets/AssetCard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchDataStart } from '../src/feature/assets/assetsSlice';

const Assets: NextPage = () => {
  const dispatch = useDispatch();
  const { assets, loading, error } = useSelector(state => state.assets);

  useEffect(() => {
    dispatch(fetchDataStart());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <ListingWarp>
        <div></div>
        <AssetCards>
          {assets.map((asset: any) => (
            <AssetCard asset={asset} key={asset.id} />
          ))}
        </AssetCards>
      </ListingWarp>
    </div>
  );
};

export default Assets;

const ListingWarp = styled.div`
  margin: 0 24px;
  flex-flow: row;
  flex: 1 0 auto;
  vertical-align: inherit;
  max-width: 100%;
  min-height: 0;
  min-width: 0;
  flex-direction: column;
  display: flex;
  align-items: stretch;
`;

const AssetCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
`;
