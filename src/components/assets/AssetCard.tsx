import Image from 'next/image';
import Link from 'next/link';
import styled from '@emotion/styled';
import { ContextIcon } from '@closet-design-system/core-connect';
import AssetCardSkeleton from './AssetCardSkeleton';
import { useState } from 'react';

export default function AssetCard(props: any) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };
  const { id, image, name } = props.asset.metadata;

  return (
    <AssetCardWarp>
      {!isImageLoaded && <AssetCardSkeleton />}
      <Link href={`/assets/${id}`}>
        <AssetCardDiv>
          <AssetImg>
            <ImageWrap>
              <Image
                src={image}
                alt="Asset"
                width="163.75"
                height="163.75"
                onLoad={handleImageLoad}
                style={{ display: isImageLoaded ? 'block' : 'none' }}
              />
            </ImageWrap>
            <HoverWrap>
              <HoverOuter>
                <HoverInner>
                  <ButNowIcon>Buy Now</ButNowIcon>
                  <AddIcon>+</AddIcon>
                </HoverInner>
              </HoverOuter>
            </HoverWrap>
          </AssetImg>
          <AssetInfo>
            <ContextIconWarp>
              <ContextIconDiv>
                <ContextIcon color="rgba(22, 22, 26, 0.6)" size="20px" />
              </ContextIconDiv>
            </ContextIconWarp>
            <div>
              <AssetName>{name}</AssetName>
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
  height: 100%;
  padding: 8px;
  background: transparent;
  border: 1px solid rgba(22, 22, 26, 0.08);
  border-radius: 16px;
  -webkit-transition: 0.1s ease-in-out;
  transition: 0.1s ease-in-out;
  &:hover {
    margin-top: -3px;
    -webkit-transition: 0.1s ease-in-out;
    transition: 0.1s ease-in-out;
  }
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

const AssetImgSkeleton = styled.div`
  margin-bottom: 10px;
  background: rgba(22, 22, 26, 0.04);
  border-radius: 14px;
  border: 1px solid white;
`;

const ImageWrap = styled.div`
  width: 163px;
  height: 163px;
`;

const HoverWrap = styled.div`
  opacity: 0;
  position: absolute;
  inset: 0;
  z-index: 1;
  transition: all 0.08s ease-in-out 0s;
  &:hover {
    opacity: 1;
    background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(22, 22, 26, 0.3) 95%);
    position: absolute;
    inset: 0;
    z-index: 1;
    transition: all 0.08s ease-in-out 0s;
  }
`;

const HoverOuter = styled.div`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translate(-50%, 10px);
  opacity: 1;
  transition: all 0.08s ease-in-out 0s;
`;

const HoverInner = styled.div`
  display: flex;
  flex-flow: row;
`;

const ButNowIcon = styled.button`
  margin-right: 8px;
  margin-bottom: 0;
  color: rgb(255, 255, 255);
  background-color: rgb(22, 22, 26);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row;
  position: relative;
  white-space: nowrap;
  line-height: 40px;
  height: 40px;
  border: 1px solid transparent;
  min-width: auto;
  font-size: 14px;
  border-radius: 12px;
  padding: 6px 13.5px;
  font-weight: 700;
  font-family: inherit;
  transition: all 0.15s ease-in-out 0s;
  transform-origin: center center;
  user-select: none;
`;

const AddIcon = styled.button`
  color: rgb(255, 255, 255);
  background-color: rgb(22, 22, 26);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row;
  position: relative;
  white-space: nowrap;
  line-height: 40px;
  height: 40px;
  border: 1px solid transparent;
  min-width: auto;
  font-size: 14px;
  border-radius: 12px;
  padding: 6px 13.5px;
  font-weight: 700;
  font-family: inherit;
  transition: all 0.15s ease-in-out 0s;
  transform-origin: center center;
  user-select: none;
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
  border: 0 solid white;
  border-radius: 12px;
  color: rgba(22, 22, 26, 0.6);
  &:hover {
    cursor: pointer;
    background: rgba(22, 22, 26, 0.08);
  }
`;

const ContextIconDiv = styled.div`
  display: inline-flex;
  align-items: center;
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

const AssetNameSkeleton = styled.div`
  background: rgba(22, 22, 26, 0.04);
  border-radius: 14px;
  width: 35%;
  padding: 8px;
`;

const AssetPriceSkeleton = styled.div`
  background: rgba(22, 22, 26, 0.04);
  border-radius: 14px;
  width: 55%;
  padding: 8px;
  margin-top: 4px;
`;
