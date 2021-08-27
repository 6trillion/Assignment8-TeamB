import { ReactElement } from 'react';
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

const CustomCheckBox: React.FC<CustomCheckBoxProps> = ({
  className,
  labelText,
  id,
  checked,
  checkHandler,
}): ReactElement => {
  return (
    <Wrapper className={className}>
      <Label checked={checked}>
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
        {labelText}
      </Label>
    </Wrapper>
  );
};

export default CustomCheckBox;

const Wrapper = styled.div`
  font-size: 1.3rem;
  margin-top: 1rem;
  margin-right: 2rem;
`;

const Label = styled.label<{ checked: boolean }>`
  display: flex;
  color: ${({ checked }) => (checked ? 'black' : '#ccccd5')};
  user-select: none;
  cursor: pointer;
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
`;

const StyledCheckBox = styled.div<{ checked: boolean }>`
  width: 1.8rem;
  height: 1.8rem;
  margin-right: 0.5rem;

  ${CheckIcon} {
    color: ${({ checked }) => (checked ? 'black' : '#ccccd5')};
  }
`;
