import { ReactElement } from 'react';
import styled from 'styled-components';
import 'styles/reset.css';
import TodoBoard from './TodoBoard';
import { STATUS, TODO_ITEM_LIST, TODO_STATUS_TEXT } from 'constants/index';

interface TodoBodyProps {
  createdAtFilter: ({ createdAt }: { createdAt: string }) => boolean;
}

function TodoBody({ createdAtFilter }: TodoBodyProps): ReactElement {
  const todoList = TODO_ITEM_LIST.filter(createdAtFilter);

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
