import SearchBox from './SearchBox';
import GridBox from './GridBox';
import styled from '@emotion/styled';

export default function Header() {
  return (
    <HeaderWrap>
      <InnerDiv>
        <SearchBox />
        <GridBox />
      </InnerDiv>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.div`
  margin: 24px 24px 16px 24px;
  vertical-align: inherit;
  max-width: 100%;
  min-height: 0;
  min-width: 0;
  flex-shrink: 0;
  flex-direction: column;
  flex-basis: auto;
  display: flex;
  -webkit-box-align: stretch;
  align-items: stretch;
`;

const InnerDiv = styled.div`
  display: flex;
`;
