import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

interface CustomCheckBoxProps {
  className: string;
  labelText: string;
  id: string;
  checked: boolean;
  checkHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
function CustomCheckBox({
  className,
  labelText,
  id,
  checked,
  checkHandler,
}: CustomCheckBoxProps) {
  return (
    <Wrapper className={className}>
      <StyledCheckBox>
        <CheckIcon>
          <FontAwesomeIcon icon={faCheck} />
        </CheckIcon>
      </StyledCheckBox>
      <HiddencheckBox
        type="checkbox"
        id={id}
        checked={checked}
        onChange={checkHandler}
      />
      <label htmlFor={id}>{labelText}</label>
    </Wrapper>
  );
}

export default CustomCheckBox;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  margin-top: 1rem;
  margin-right: 2rem;
`;

const CheckIcon = styled.div`
  font-size: 1.6rem;
  color: black;
`;

const StyledCheckBox = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  border: ${checked =>
    checked ? '1px solid transparent' : '1px solid #ccccd5'};
  border-radius: 0.5rem;
  background-color: ${checked => (checked ? 'transparent' : '#fff')};
  margin-right: 0.5rem;

  ${CheckIcon} {
    visibility: ${checked => (checked ? 'visible' : 'hidden')};
  }
`;

const HiddencheckBox = styled.input`
  width: 1px;
  height: 1px;
  border: 0;
  clip: rect(0 0 0 0);
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  margin: -1px;
  padding: 0;
`;
