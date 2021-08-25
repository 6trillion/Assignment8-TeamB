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
          <span>{status}</span>
          <span>{taskName}</span>
        </SideTabTitle>
        <ItemContent>
          {importance !== 'none' && '중요도 ' + importance}
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
  display: flex;
  font-size: 2rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 3rem;

  span:first-child {
    margin-right: 0.8rem;
  }
`;

const ItemContent = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 2.5rem;
  font-size: 1.4rem;
  color: #8a8a8a;
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
