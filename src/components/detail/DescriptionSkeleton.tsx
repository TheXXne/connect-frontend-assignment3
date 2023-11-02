import styled from '@emotion/styled';

export default function DescriptionSkeleton() {
  return (
    <DescWrap>
      <Border />
      <DescTitle>Description</DescTitle>
      <DescContents />
    </DescWrap>
  );
}

const DescWrap = styled.div`
  flex-flow: column;
  vertical-align: inherit;
  max-width: 100%;
  min-height: 0;
  min-width: 0;
  flex-shrink: 0;
  flex-direction: column;
  flex-basis: auto;
  display: flex;
  align-items: stretch;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 16px;
`;

const DescTitle = styled.div`
  margin-top: 24px;
  margin-bottom: 8px;
  padding-left: 20px;
  font-family: Inter, Helvetica, Arial, sans-serif;
  font-size: 22px;
  line-height: 28px;
  font-weight: 700;
`;

const DescContents = styled.div`
  border-radius: 14px;
  padding: 40px 240px;
  background: rgba(22, 22, 26, 0.04);
`;

const Border = styled.div`
  margin-top: 44px;
  border: 1px solid rgba(22, 22, 26, 0.08);
`;
