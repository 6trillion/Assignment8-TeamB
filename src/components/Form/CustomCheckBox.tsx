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

type Props = {
  checked?: boolean;
};
const CustomCheckBox: React.FC<CustomCheckBoxProps> = ({
  className,
  labelText,
  id,
  checked,
  checkHandler,
}) => {
  return (
    <Wrapper className={className}>
      <StyledCheckBox checked={checked}>
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
};

export default CustomCheckBox;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  margin-top: 1rem;
  margin-right: 2rem;
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
const CheckIcon = styled.div`
  font-size: 1.6rem;
  color: black;
`;

const StyledCheckBox = styled.div<Props>`
  width: 1.8rem;
  height: 1.8rem;
  border: ${Props =>
    Props.checked ? '1px solid transparent' : '1px solid #ccccd5'};
  border-radius: 0.5rem;
  background-color: ${Props => (Props.checked ? 'transparent' : '#fff')};
  margin-right: 0.5rem;

  ${CheckIcon} {
    visibility: ${Props => (Props.checked ? 'visible' : 'hidden')};
    color: #47a547;
  }
`;
