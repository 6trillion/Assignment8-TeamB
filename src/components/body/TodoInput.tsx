import React from 'react';
import styled from 'styled-components';

function TodoInput() {
  return (
    <TodoInputWrapper>
      <CustomInput placeholder="할 일을 입력해주세용" />
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

const CustomInput = styled.input`
  width: 100%;
  height: 6rem;
  border: 1px solid #e6e6e6;
  padding: 0.7rem 1.2rem;
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
