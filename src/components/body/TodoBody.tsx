import { ReactElement } from 'react';
import { TodoBoard } from 'components/body';
import { STATUS, TODO_STATUS_TEXT, useTodosState } from 'constants/index';
import styled from 'styled-components';

interface TodoBodyProps {
  createdAtFilter: ({ createdAt }: { createdAt: string }) => boolean;
  importanceFilter: any;
}

function TodoBody({
  createdAtFilter,
  importanceFilter,
}: TodoBodyProps): ReactElement {
  const todoList = useTodosState()
    .filter(createdAtFilter)
    .filter(importanceFilter);

  return (
    <BodyWrapper>
      <TodoBoard
        title={TODO_STATUS_TEXT.TODO}
        todolist={todoList.filter(item => item.status === STATUS.NOT_STARTED)}
      />
      <TodoBoard
        title={TODO_STATUS_TEXT.ON_PROGRESS}
        todolist={todoList.filter(item => item.status === STATUS.ONGOING)}
      />
      <TodoBoard
        title={TODO_STATUS_TEXT.DONE}
        todolist={todoList.filter(item => item.status === STATUS.FINISHED)}
      />
    </BodyWrapper>
  );
}

export default TodoBody;

const BodyWrapper = styled.div`
  max-width: 100rem;
  display: flex;
  margin: 0 auto;
  padding-top: 10rem;
`;
