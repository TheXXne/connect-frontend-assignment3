import axios from 'axios';
import styled from '@emotion/styled';
import AssetInfo from '../../src/components/detail/AssetInfo';
import ImageDesc from '../../src/components/detail/ImageDesc';

const Asset = ({ image, name }: any) => {
  return (
    <DetailWarp>
      <ImageDesc img={image} />
      <AssetInfo name={name} />
    </DetailWarp>
  );
};

export const getServerSideProps = async (context: any) => {
  const { tokenId } = context.query;
  const response = await axios.get('http://localhost:3000/api/assets', {
    params: {
      tokenId: tokenId,
    },
  });
  const metadata = response.data.asset.metadata;

  return {
    props: {
      image: metadata.image,
      name: metadata.name,
    },
  };
};

export default Asset;

const DetailWarp = styled.div`
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
