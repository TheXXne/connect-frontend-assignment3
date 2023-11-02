import Image from 'next/image';
import styled from '@emotion/styled';
import Description from './Description';
import ImageSkeleton from './ImageSkeleton';
import { useState } from 'react';
import DescriptionSkeleton from './DescriptionSkeleton';
import Skeleton from 'react-loading-skeleton';

export default function ImageDesc(props: any) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };
  return (
    <ImageDescWrap>
      <AssetImg>
        <Image
          src={props.img}
          alt="img"
          width="520"
          height="520"
          onLoad={handleImageLoad}
          style={{ display: isImageLoaded ? 'block' : 'none' }}
        />
        {!isImageLoaded && <Skeleton height={520} width={520} />}
      </AssetImg>
      {!isImageLoaded ? <DescriptionSkeleton /> : <Description />}
    </ImageDescWrap>
  );
}

const ImageDescWrap = styled.div`
  margin-right: 32px;
  margin-bottom: 0;
  flex: 1 1 auto;
  align-items: center;
  vertical-align: inherit;
  max-width: 100%;
  min-height: 0;
  min-width: 0;
  flex-direction: column;
  display: flex;
`;

const AssetImg = styled.div`
  margin-right: 8px;
  margin-bottom: 32px;
  opacity: 1;
  overflow: hidden;
  position: relative;
  border-radius: 14px;
  border: 1px solid white;
  width: 520px;
  height: 520px;
`;
