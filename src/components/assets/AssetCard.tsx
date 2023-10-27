import Image from 'next/image';
import Link from 'next/link';
import styled from '@emotion/styled';
import { ContextIcon } from '@closet-design-system/core-connect';

export default function AssetCard(props: any) {
  return (
    <AssetCardWarp>
      <Link href={`/assets/${props.asset.metadata.id}`}>
        <AssetCardDiv>
          <AssetImg>
            <Image src={props.asset.metadata.image} alt="Asset" width="163.75" height="163.75" />
          </AssetImg>
          <AssetInfo>
            <ContextIconWarp>
              <ContextIconDiv>
                <ContextIcon color="rgba(22, 22, 26, 0.6)" size="20px" />
              </ContextIconDiv>
            </ContextIconWarp>
            <div>
              <AssetName>{props.asset.metadata.name}</AssetName>
            </div>
            <div>
              <AssetPrice>Price 1.234 ETH</AssetPrice>
            </div>
          </AssetInfo>
        </AssetCardDiv>
      </Link>
    </AssetCardWarp>
  );
}

const AssetCardWarp = styled.div`
  -webkit-box-flex: 1;
  height: 100%;
  padding: 8px;
  background: transparent;
  border: 1px solid rgba(22, 22, 26, 0.08);
  border-radius: 16px;
`;

const AssetCardDiv = styled.div`
  cursor: pointer;
  transition: all 0.15s ease-in-out 0s;
  will-change: transform;
`;

const AssetImg = styled.div`
  margin-bottom: 10px;
  margin-right: 0;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background: rgba(22, 22, 26, 0.04);
  backface-visibility: hidden;
  transform: translate3d(0px, 0px, 0px);
  opacity: 1;
  border-radius: 14px;
  border: 1px solid white;
`;

const AssetInfo = styled.div`
  font-family: Inter, Helvetica, Arial, sans-serif;
  position: relative;
  height: 42px;
`;

const AssetName = styled.span`
  font-family: inherit;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 15px;
  line-height: 22px;
  font-weight: 700;
  -webkit-box-flex: 1;
  flex-grow: 1;
  max-width: 80%;
  padding: 0 4px;
`;

const ContextIconWarp = styled.button`
  top: -4px;
  right: 0;
  position: absolute;
  width: 32px;
  height: 32px;
  background: transparent;
  border: 1px solid white;
  border-radius: 12px;
  color: rgba(22, 22, 26, 0.6);
`;

const ContextIconDiv = styled.div`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  transition: all 0.15s ease-in-out 0s;
  height: 100%;
  flex-flow: row;
`;

const AssetPrice = styled.span`
  font-family: inherit;
  font-size: 11px;
  line-height: 15px;
  font-weight: 700;
  padding: 0 4px 4px;
  margin-top: 4px;
  color: rgba(22, 22, 26, 0.6);
`;
