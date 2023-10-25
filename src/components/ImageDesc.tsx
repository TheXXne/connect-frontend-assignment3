import Image from 'next/image';
import styled from '@emotion/styled';
import Description from '../../src/components/Description';

export default function ImageDesc(props: any) {
  return (
    <ImageDescWrap>
      <AssetImg>
        <Image src={props.img} alt="img" width="520" height="520" />
      </AssetImg>
      <Description />
    </ImageDescWrap>
  );
}

const ImageDescWrap = styled.div`
  margin-right: 32px;
  margin-bottom: 0;
  -webkit-box-flex: 1;
  flex: 1 1 auto;
  -webkit-box-align: center;
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
`;
