import axios from 'axios';
import Image from 'next/image';

const Asset = ({ asset }: any) => {
  return (
    <div>
      <h4>{asset.metadata.name}</h4>
      <Image src={asset.metadata.image} alt="Asset" width="163.75" height="165.75" />
    </div>
  );
};

export const getServerSideProps = async (context: any) => {
  const { tokenId } = context.query;
  console.log('tokenId :: ', tokenId);
  const response = await axios.get('http://localhost:3000/api/assets', {
    params: {
      tokenId: tokenId,
    },
  });
  console.log('asset :: ', response.data.asset);

  return {
    props: {
      asset: response.data.asset,
    },
  };
};

export default Asset;
