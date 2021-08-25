import { ReactElement } from 'react';
import styled from 'styled-components';

interface TodoItemDetailProps {
  taskName: string;
  status: string;
  createdAt: string;
}

const TodoItemDetail = ({
  taskName,
  status,
  createdAt,
}: TodoItemDetailProps): ReactElement => {
  return (
    <TodoItemDetailWrapper>
      <SideTabTitle>
        {status} {taskName}
      </SideTabTitle>
      <div>생성일 : {createdAt}</div>
      <LongButton>EDIT</LongButton>
      <RedButton>DELETE</RedButton>
    </TodoItemDetailWrapper>
  );
};

const TodoItemDetailWrapper = styled.div`
  padding: 2rem;
`;

const SideTabTitle = styled.div`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
`;

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
