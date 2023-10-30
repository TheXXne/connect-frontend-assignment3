import { SearchIcon } from '@closet-design-system/core-connect';
import styled from '@emotion/styled';

export default function SearchBox() {
  return (
    <SearchBoxWrap>
      <SearchBoxOuter>
        <SearchBoxInner>
          <BoxDiv>
            <IconWrap>
              <SearchIcon color="rgba(22, 22, 26, 0.6)" size={'13.4px'} />
            </IconWrap>
            <InputDiv>
              <Input placeholder="Search for NFTs" />
            </InputDiv>
          </BoxDiv>
        </SearchBoxInner>
      </SearchBoxOuter>
    </SearchBoxWrap>
  );
}

const SearchBoxWrap = styled.div`
  margin-right: 16px;
  margin-bottom: 0;
  flex-grow: 1;
  flex-shrink: 1;
`;

const SearchBoxOuter = styled.form`
  flex-grow: 1;
`;

const SearchBoxInner = styled.div`
  position: relative;
  justify-content: center;
  background: rgba(22, 22, 26, 0.04);
  backdrop-filter: blur(40px);
  border: 1px solid transparent;
  transition: all 0.15s ease-in-out 0s;
  overflow: hidden;
  min-height: 40px;
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 14px;
`;

const BoxDiv = styled.div`
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  display: inline-block;
  position: relative;
`;

const IconWrap = styled.div`
  margin-right: 6px;
  margin-bottom: 0;
  cursor: auto;
  justify-content: center;
  position: absolute;
  top: 50%;
  margin-top: -6px;
`;

const InputDiv = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  padding: 0 30px;
  justify-content: center;
  position: absolute;
  top: 50%;
  margin-top: -8.5px;
`;

const Input = styled.input`
  font-weight: inherit;
  cursor: inherit;
  background: transparent;
  border-width: 0;
  color: rgba(22, 22, 26, 0.8);
  outline: none;
  font-size: 15px;
`;
