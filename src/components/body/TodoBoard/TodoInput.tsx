import React, { useState } from 'react';
import CustomCheckBox from 'components/Form/CustomCheckBox';
import { useTodosDispatch } from 'utils/TodosContext';
import { getDateOfLastUpdate } from 'utils/index';
import styled from 'styled-components';

interface TodoInputProps {
  onSubmit: (open: boolean) => void;
  status: string;
}

const TodoInput: React.FC<TodoInputProps> = ({ onSubmit, status }) => {
  const [selectedOption, setSelectedOption] = useState('none');
  const [value, setValue] = useState('');
  const dispatch = useTodosDispatch();

  const handleCheckEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentSelectedId = e.target.id;
    currentSelectedId === selectedOption
      ? setSelectedOption('none')
      : setSelectedOption(currentSelectedId);
  };

  const handleCancelButton = () => {
    onSubmit(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: 'CREATE',
      taskName: value,
      status: status,
      createdAt: getDateOfLastUpdate(),
      updatedAt: getDateOfLastUpdate(),
      importance: selectedOption,
    });

    onSubmit(false);
  };

  return (
    <TodoInputWrapper>
      <InsertForm onSubmit={handleSubmit}>
        <CustomInput
          autoFocus
          placeholder="할 일을 입력해주세요!"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
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
          <AddButton type="submit">Add</AddButton>
          <CancelButton onClick={handleCancelButton}>Cancel</CancelButton>
        </ButtonWrapper>
      </InsertForm>
    </TodoInputWrapper>
  );
};

const TodoInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5rem 0;
`;

const InsertForm = styled.form``;

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

export default TodoInput;
