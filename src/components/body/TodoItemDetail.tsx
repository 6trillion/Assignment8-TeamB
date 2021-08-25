import { ReactElement, useState, useEffect } from 'react';
import styled from 'styled-components';
import { DATE_FORMAT } from 'constants/index';

interface TodoItemDetailProps {
  taskName: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  importance: string;
}

const TodoItemDetail = ({
  taskName,
  status,
  createdAt,
  updatedAt,
  importance,
}: TodoItemDetailProps): ReactElement => {
  const [edit, setEdit] = useState(false);
  const [textFirstEdit, setTextFirstEdit] = useState(true);
  const [newText, setNewText] = useState(taskName);
  const [newImportance, setNewImportance] = useState(importance);
  let nameHeight = 0;

  useEffect(() => {
    const nameSpan = document.getElementById('taskName');
    if (nameSpan) {
      nameHeight = nameSpan.clientHeight;
    }
  }, []);

  const handleEdit = () => {
    if (!edit) {
      setEdit(!edit);
      return;
    }

    if (edit) {
      saveData();
      setEdit(!edit);
    }
  };

  const getDateOfLastUpdate = () => {
    const date = new Date().toISOString().slice(0, 10);
    return date;
  };

  const handleCheckOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentCheck = e.target.id;
    setNewImportance(currentCheck);
  };

  const handleTextareaOnChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const currentText = e.target.value;
    setNewText(currentText);
  };

  const handleTextareaFocus = () => {
    textFirstEdit && setNewText('');
    setTextFirstEdit(false);
  };

  const saveData = () => {
    console.log('save');
    console.log(newText);
    console.log(newImportance);
    console.log(getDateOfLastUpdate());
  };

  return (
    <TodoItemDetailWrapper>
      <div>
        <SideTabTitle>
          {!edit ? (
            <>
              <span>{status}</span>
              <span id="taskName">{taskName}</span>
            </>
          ) : (
            <>
              <span>{status}</span>
              <TextArea
                value={newText}
                onChange={handleTextareaOnChange}
                onFocus={handleTextareaFocus}
              ></TextArea>
            </>
          )}
        </SideTabTitle>
        <ItemContent>
          {!edit ? (
            importance !== 'none' ? (
              '중요도 ' + importance
            ) : (
              '중요도 없음'
            )
          ) : (
            <>
              <CheckBoxWrapper>
                <input
                  type="checkbox"
                  name="high"
                  id="high"
                  onChange={handleCheckOnChange}
                  checked={newImportance === 'high'}
                />
                <label htmlFor="high">중요해요!</label>
                <input
                  type="checkbox"
                  name="low"
                  id="low"
                  onChange={handleCheckOnChange}
                  checked={newImportance === 'low'}
                />
                <label htmlFor="low">여유있어요</label>
              </CheckBoxWrapper>
            </>
          )}
        </ItemContent>
        <ItemContent>
          <span>created at</span>
          <span>{createdAt}</span>
        </ItemContent>
        <ItemContent>
          <span>last update at</span>
          <span>{updatedAt}</span>
        </ItemContent>
      </div>
      <ButtonWrapper>
        <LongButton onClick={handleEdit}>{!edit ? 'EDIT' : 'OK'}</LongButton>
        <RedButton>DELETE</RedButton>
      </ButtonWrapper>
    </TodoItemDetailWrapper>
  );
};

const TodoItemDetailWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
`;

const SideTabTitle = styled.div`
  display: flex;
  font-size: 2rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 3rem;

  span:first-child {
    margin-right: 0.8rem;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 10rem;
  resize: none;
`;

const ItemContent = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 2.5rem;
  font-size: 1.4rem;
  color: #8a8a8a;
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;

  label {
    margin-left: 0.5rem;
    margin-right: 2rem;
  }
`;

const ButtonWrapper = styled.div``;

const LongButton = styled.button`
  width: 100%;
  border: 1px solid #dcdcdc;
  border-radius: 0.8rem;
  cursor: pointer;
  margin-top: 0.8rem;
  padding: 0.8rem;
`;

const RedButton = styled(LongButton)`
  background-color: #eb7e7e;
  color: #fff;
  border: 1px solid #ca6d6d;
`;

export default TodoItemDetail;
