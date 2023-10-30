import styled from '@emotion/styled';

export default function Description() {
  return (
    <DescWrap>
      <Border />
      <DescTitle>Description</DescTitle>
      <DescContents>
        Take the red bean to join the garden. View the collection at
        [azuki.com/gallery](https://azuki.com/gallery)
      </DescContents>
      <DescContents>
        Azuki starts with a collection of 10,000 avatars that give you membership access to The
        Garden: a corner of the internet where artists, builders, and web3 enthusiasts meet to
        create a decentralized future. Azuki holders receive access to exclusive drops, experiences,
        and more. Visit [azuki.com](https://azuki.com) for more details.
      </DescContents>
      <DescContents>We rise together. We build together. We grow together.</DescContents>
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

const DescTitle = styled.span`
  margin-top: 24px;
  margin-bottom: 8px;
  padding-left: 20px;
  font-family: Inter, Helvetica, Arial, sans-serif;
  font-size: 22px;
  line-height: 28px;
  font-weight: 700;
`;

const DescContents = styled.p`
  padding-left: 20px;
  font-family: Inter, Helvetica, Arial, sans-serif;
  font-size: 15px;
  line-height: 22px;
  font-weight: 500;
  color: rgba(22, 22, 26, 0.6);
`;

const Border = styled.div`
  margin-top: 44px;
  border: 1px solid rgba(22, 22, 26, 0.08);
`;
