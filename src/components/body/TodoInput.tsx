import React, { useState } from 'react';
import styled from 'styled-components';
import CustomCheckBox from 'components/Form/CustomCheckBox';

function TodoInput() {
  const [selectedOption, setSelectedOption] = useState('none');

  const handleCheckEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentSelectedId = e.target.id;
    setSelectedOption(currentSelectedId);
    console.log(currentSelectedId);
  };
  return (
    <TodoInputWrapper>
      <CustomInput placeholder="할 일을 입력해주세용" autoFocus />
      <CheckBoxWrapper>
        <CustomCheckBox
          className="high"
          labelText="중요해요!"
          id="high"
          checked={selectedOption === 'high'}
          checkHandler={handleCheckEvent}
        />
        <CustomCheckBox
          className="low"
          labelText="여유있어요"
          id="low"
          checked={selectedOption === 'low'}
          checkHandler={handleCheckEvent}
        />
      </CheckBoxWrapper>
      <ButtonWrapper>
        <AddButton>Add</AddButton>
        <CancelButton>Cancel</CancelButton>
      </ButtonWrapper>
    </TodoInputWrapper>
  );
}

export default TodoInput;

const TodoInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5rem 0;
`;

const CustomInput = styled.textarea`
  width: 100%;
  height: 7rem;
  resize: none;
  border: 1px solid #e6e6e6;
  padding: 0.7rem 1.2rem;

  &:focus {
    outline: none;
  }
`;

const CheckBoxWrapper = styled.div`
  display: flex;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  width: calc(98% / 2);
  border: none;
  padding: 0.5rem;
  margin: 1rem 0;
  border-radius: 0.8rem;
  cursor: pointer;
`;

const AddButton = styled(Button)`
  background-color: #a6e999;
  border: 1px solid #8dc582;
`;

const CancelButton = styled(Button)`
  background-color: #fff;
  border: 1px solid #d8d8d8;
`;
