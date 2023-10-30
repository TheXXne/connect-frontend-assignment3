import { CardSizeMIcon, CardSizeSIcon } from '@closet-design-system/core-plm';
import styled from '@emotion/styled';

export default function GridBox() {
  return (
    <GridBoxWrap>
      <GridBoxOuter>
        <GridBoxMid>
          <GridBoxInner>
            <IconWrap>
              <IconTranslate />
              <MSizeIcon>
                <CardSizeMIcon size={18} color="rgba(22, 22, 26, 0.6)" />
              </MSizeIcon>
              <SSizeIcon>
                <CardSizeSIcon size={18} color="rgba(22, 22, 26, 0.6)" />
              </SSizeIcon>
            </IconWrap>
          </GridBoxInner>
        </GridBoxMid>
      </GridBoxOuter>
    </GridBoxWrap>
  );
}

const GridBoxWrap = styled.div`
  position: relative;
  height: 40px;
  max-width: 100%;
  width: 104px;
`;

const GridBoxOuter = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
`;

const GridBoxMid = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
`;

const GridBoxInner = styled.div`
  box-sizing: border-box;
  display: block;
  min-height: 100%;
  min-width: fit-content;
  padding: 2px;
  height: 40px;
  width: 0;
  background: rgba(22, 22, 26, 0.04);
  border-radius: 16px;
`;

const IconWrap = styled.div`
  height: 36px;
  flex-flow: row;
  align-items: stretch;
  width: fit-content;
  position: relative;
  margin: auto;
  overflow: hidden;
`;

const IconTranslate = styled.div`
  transform: translateX(50px);
  width: 50px;
  border: 1px solid white;
  border-radius: 16px;
`;

const MSizeIcon = styled.button`
  height: 36px;
  font-size: 13px;
  border: 0 solid white;
  border-radius: 16px;
`;

const SSizeIcon = styled.button`
  height: 36px;
  font-size: 13px;
  border: 0 solid white;
  border-radius: 16px;
`;
