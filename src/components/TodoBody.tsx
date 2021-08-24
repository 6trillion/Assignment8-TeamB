import React from 'react';
import styled from 'styled-components';
import 'styles/reset.css';
import TodoBoard from './TodoBoard';
import { STATUS, TODO_ITEM_LIST } from 'constants/index';

function TodoBody() {
  const TODO = 'TO DO';
  const ON_PROGRESS = 'On Progress';
  const DONE = 'DONE';

  return (
    <BodyWrapper>
      <TodoBoard
        title={TODO}
        todolist={TODO_ITEM_LIST.filter(
          item => item.status === STATUS.NOT_STARTED,
        )}
      />
      <TodoBoard
        title={ON_PROGRESS}
        todolist={TODO_ITEM_LIST.filter(item => item.status === STATUS.ONGOING)}
      />{' '}
      <TodoBoard
        title={DONE}
        todolist={TODO_ITEM_LIST.filter(
          item => item.status === STATUS.FINISHED,
        )}
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
