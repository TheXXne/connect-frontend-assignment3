import React, { useState } from 'react';
import styled from '@emotion/styled';

export default function ToggleSlide() {
  const [isChecked, setIsChecked] = useState(false);
  const left = '기본';
  const right = '상세';
  return (
    <ToggleWrapper>
      <CheckBox
        type="checkbox"
        onChange={() => {
          isChecked ? setIsChecked(false) : setIsChecked(true);
        }}
      />
      <LeftSide>{left}</LeftSide>
      <RightSide>{right}</RightSide>
    </ToggleWrapper>
  );
}

const ToggleWrapper = styled.div`
  margin: 40px 45% 40px 45%;
  padding: 10px;
  background: var(--grey-background);
  border-radius: 2em;
  width: 160px;
  height: 30px;
  position: relative;
`;
const LeftSide = styled.div`
  cursor: pointer;
  position: absolute;
  font-weight: var(--bold-900);
  font-size: var(--small);
  top: 7px;
  left: 27px;
`;
const RightSide = styled.div`
  cursor: pointer;
  position: absolute;
  font-weight: var(--bold-900);
  font-size: var(--small);
  top: 7px;
  left: 107px;
`;

const CheckBox = styled.input`
  cursor: pointer;
  padding: 12px 0 12px 0;
  background: var(--white);
  position: absolute;
  border-radius: 2em;
  width: 78px;
  left: 3px;
  top: 3px;
  transition: all 0.2s ease-in-out;
  :checked {
    background: var(--white);
    left: 79px;
    transition: all 0.2s ease-in-out;
  }
`;
