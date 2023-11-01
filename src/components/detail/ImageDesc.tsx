import Image from 'next/image';
import styled from '@emotion/styled';
import Description from './Description';
import ImageSkeleton from './ImageSkeleton';

export default function ImageDesc(props: any) {
  return (
    <ImageDescWrap>
      <AssetImg>
        {/*redux 사용해, props.img 대신 isLoding 변수 활용*/}
        {true ? <Image src={props.img} alt="img" width="520" height="520" /> : <ImageSkeleton />}
      </AssetImg>
      <Description />
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
