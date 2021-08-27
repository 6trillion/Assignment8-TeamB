import { ReactElement, useRef } from 'react';
import styled from 'styled-components';
import { TodoBoard } from 'components/body';
import { STATUS, TODO_STATUS_TEXT } from 'constants/index';
import { ITodo } from 'types/index';
import { useTodosDispatch, useTodosState } from 'utils/TodosContext';

interface TodoBodyProps {
  applyAllFilters: (todo: ITodo) => boolean;
}

function TodoBody({ applyAllFilters }: TodoBodyProps): ReactElement {
  const todoList = useTodosState();
  const draggingItem = useRef<number | null>(null);
  const dragoverItem = useRef<number | null>(null);

  const onDragEnter = (e: React.DragEvent<HTMLElement>): void => {
    e.preventDefault();
  };

  const onDragOver = (e: React.DragEvent<HTMLElement>): void => {
    e.preventDefault();
  };

  const dispatch = useTodosDispatch();

  const onDrop = () => {
    console.log('body drop');
    const test = todoList.filter((todoList: any) => todoList.isDrag);
    dispatch({
      type: 'DRAG',
      id: test[0].id,
      isDrag: false,
    });
  };

  return (
    <BodyWrapper
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <TodoBoard
        title={TODO_STATUS_TEXT.TODO}
        status={STATUS.NOT_STARTED}
        todoList={todoList}
        applyAllFilters={applyAllFilters}
        draggingItem={draggingItem}
        dragoverItem={dragoverItem}
      />
      <TodoBoard
        title={TODO_STATUS_TEXT.ON_PROGRESS}
        status={STATUS.ONGOING}
        todoList={todoList}
        applyAllFilters={applyAllFilters}
        draggingItem={draggingItem}
        dragoverItem={dragoverItem}
      />
      <TodoBoard
        title={TODO_STATUS_TEXT.DONE}
        status={STATUS.FINISHED}
        todoList={todoList}
        applyAllFilters={applyAllFilters}
        draggingItem={draggingItem}
        dragoverItem={dragoverItem}
      />
    </BodyWrapper>
  );
}

const BodyWrapper = styled.div`
  max-width: 100rem;
  display: flex;
  margin: 0 auto;
  padding-top: 10rem;
  box-sizing: border-box;
`;

export default TodoBody;
