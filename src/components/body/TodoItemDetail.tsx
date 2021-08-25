import { ReactElement } from 'react';
import styled from 'styled-components';

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
  return (
    <TodoItemDetailWrapper>
      <div>
        <SideTabTitle>
          {status} {taskName}
        </SideTabTitle>
        <ItemContent>
          {importance !== 'none' && '중요도 ' + importance}
        </ItemContent>
        <ItemContent>created at {createdAt}</ItemContent>
        <ItemContent>last update at {createdAt}</ItemContent>
      </div>
      <ButtonWrapper>
        <LongButton>EDIT</LongButton>
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
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
`;

const ItemContent = styled.div`
  line-height: 2.2rem;
  font-size: 1.4rem;
  color: #a9a9a9;
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
