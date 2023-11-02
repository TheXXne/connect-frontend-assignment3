import Image from 'next/image';
import styled from '@emotion/styled';

export default function AssetInfo(props) {
  return (
    <AssetInfoWrap>
      <CollectionInfo>
        <CollectionSymbol />
        <Collection>Azuki</Collection>
        {/*<CollectionSkeleton />*/}
        <YellowCheck>
          <Image src="/yellow check.png" alt="Logo" width="16" height="16" />
        </YellowCheck>
      </CollectionInfo>
      <AssetName>{props.name}</AssetName>
      {/*<AssetNameSkeleton />*/}
      <Royalties>Royalties</Royalties>
      <Border />
    </AssetInfoWrap>
  );
}

const AssetInfoWrap = styled.div`
  margin-bottom: 16px;
  flex-shrink: 1;
  position: sticky;
  width: 100%;
  min-width: 370px;
  max-width: 450px;
  vertical-align: inherit;
  min-height: 0;
  flex-direction: column;
  flex-basis: auto;
  display: flex;
  align-items: stretch;
`;

const CollectionInfo = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const CollectionSymbol = styled.div`
  margin-right: 8px;
  margin-bottom: 0;
  background-image: url('/azuki collection.jpeg');
  background-size: cover;
  width: 24px;
  height: 24px;
  opacity: 1;
  position: relative;
  border-radius: 6px;
  border: 1px solid white;
`;

const Collection = styled.span`
  margin-right: 8px;
  padding-top: 1px;
  margin-bottom: 0;
  font-family: Inter, Helvetica, Arial, sans-serif;
  -webkit-tap-highlight-color: transparent;
  font-weight: 400;
  line-height: 1.4;
  color: rgb(22, 22, 26);
`;

const CollectionSkeleton = styled.div`
  margin-right: 8px;
  border-radius: 14px;
  padding: 0 40px;
  background: rgba(22, 22, 26, 0.04);
`;

const YellowCheck = styled.div`
  padding-top: 4px;
`;

const AssetName = styled.span`
  font-family: Inter, Helvetica, Arial, sans-serif;
  overflow-wrap: break-word;
  hyphens: auto;
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 8px;
`;

const AssetNameSkeleton = styled.div`
  margin-bottom: 8px;
  margin-right: 8px;
  border-radius: 14px;
  width: 40%;
  padding: 20px 0;
  background: rgba(22, 22, 26, 0.04);
`;

const Royalties = styled.span`
  font-family: Inter, Helvetica, Arial, sans-serif;
  overflow-wrap: break-word;
  hyphens: auto;
  font-size: 15px;
  color: rgba(22, 22, 26, 0.6);
  margin-bottom: 8px;
`;

const Border = styled.div`
  border: 1px solid rgba(22, 22, 26, 0.08);
`;
