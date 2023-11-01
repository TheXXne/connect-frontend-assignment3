import styled from '@emotion/styled';

export default function AssetCardSkeleton() {
  return (
    <AssetCardWarp>
      <div>
        <div>
          <AssetImg>
            <ImageWrap />
          </AssetImg>
          <AssetInfo>
            <AssetName />
            <AssetPrice />
          </AssetInfo>
        </div>
      </div>
    </AssetCardWarp>
  );
}

const AssetCardWarp = styled.div`
  height: 100%;
  padding: 8px;
  background: transparent;
  border: 1px solid rgba(22, 22, 26, 0.08);
  border-radius: 16px;
`;

const AssetImg = styled.div`
  margin-bottom: 10px;
  background: rgba(22, 22, 26, 0.04);
  border-radius: 14px;
  border: 1px solid white;
`;

const ImageWrap = styled.div`
  width: 163px;
  height: 163px;
`;

const AssetInfo = styled.div`
  height: 42px;
`;

const AssetName = styled.div`
  background: rgba(22, 22, 26, 0.04);
  border-radius: 14px;
  width: 35%;
  padding: 8px;
`;

const AssetPrice = styled.div`
  background: rgba(22, 22, 26, 0.04);
  border-radius: 14px;
  width: 55%;
  padding: 8px;
  margin-top: 4px;
`;
