import styled from '@emotion/styled';

export default function ImageSkeleton() {
  return <SkeletonImage />;
}

const SkeletonImage = styled.div`
  width: 520px;
  height: 520px;
  margin-bottom: 32px;
  border-radius: 14px;
  border: 1px solid white;
  background: rgba(22, 22, 26, 0.04);
`;
