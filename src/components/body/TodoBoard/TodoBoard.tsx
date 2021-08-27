import React, {
  ReactElement,
  useState,
  MutableRefObject,
  useEffect,
  useRef,
} from 'react';
import { PlusButton, TodoItem, TodoInput } from 'components/body';
import { ITodo } from 'types/index';
import { useTodosDispatch } from 'utils/TodosContext';
import { getDateOfLastUpdate } from 'utils';
import styled from 'styled-components';

interface TodoBoardProps {
  title: string;
  status: string;
  todoList: ITodo[];
  applyAllFilters: (todo: ITodo) => boolean;
  draggingItem: MutableRefObject<number | null>;
  dragoverItem: MutableRefObject<number | null>;
}

function TodoBoard({
  title,
  status,
  todoList,
  applyAllFilters,
  draggingItem,
  dragoverItem,
}: TodoBoardProps): ReactElement {
  const [open, setOpen] = useState<boolean>(false);
  const [drag, setDrag] = useState(-1);

  useEffect(() => {
    // console.log(drag);
  }, [drag]);

  const dispatch = useTodosDispatch();

  const handleTodoInput = (data: boolean): void => {
    setOpen(data);
  };

  const handlePlusBtn = (data: boolean): void => {
    setOpen(data);
  };

  const onDragEnter = (e: React.DragEvent<HTMLElement>): void => {
    e.preventDefault();

    const dragoverItemIndex: string | undefined = (e.target as HTMLElement)
      .dataset.index;

    if (!dragoverItemIndex && e.target !== e.currentTarget) return;

    handleDragEnter(e, dragoverItemIndex);
  };

  const handleDragStart = (e: React.DragEvent<HTMLElement>, index: number) => {
    draggingItem.current = index;
  };

  const handleDragEnter = (
    e: React.DragEvent<HTMLElement>,
    index: string | undefined,
  ) => {
    const todoListCopy = [...todoList];

    if (!index) {
      const currentItem: number = draggingItem.current as number;
      const draggingItemContent: ITodo = todoListCopy[currentItem];
      const anotherStatus = (e.target as HTMLElement).dataset.status as string;
      let lastIndexOfOtherStatus: number = todoListCopy
        .slice()
        .reverse()
        .findIndex(todo => todo.status === anotherStatus);

      if (draggingItemContent.status !== anotherStatus) {
        draggingItemContent.updatedAt = getDateOfLastUpdate();
        draggingItemContent.status = anotherStatus;
      }

      if (lastIndexOfOtherStatus === -1) {
        todoListCopy.splice(draggingItem.current as number, 1);
        todoListCopy.splice(0, 0, draggingItemContent);

        draggingItem.current = 0;
        dragoverItem.current = null;

        dispatch({ type: 'CHANGE', todoListCopy });
        return;
      }

      lastIndexOfOtherStatus = todoListCopy.length - lastIndexOfOtherStatus - 1;

      if (lastIndexOfOtherStatus < (draggingItem.current as number)) {
        todoListCopy.splice(draggingItem.current as number, 1);
        todoListCopy.splice(lastIndexOfOtherStatus + 1, 0, draggingItemContent);
        lastIndexOfOtherStatus += 1;
      } else if (lastIndexOfOtherStatus > (draggingItem.current as number)) {
        todoListCopy.splice(draggingItem.current as number, 1);
        todoListCopy.splice(lastIndexOfOtherStatus, 0, draggingItemContent);
      } else return;

      draggingItem.current = lastIndexOfOtherStatus;
      dragoverItem.current = null;

      dispatch({ type: 'CHANGE', todoListCopy });
      return;
    }

    dragoverItem.current = +index;

    if (draggingItem.current === null || dragoverItem.current === null) return;
    if (draggingItem.current === dragoverItem.current) return;

    const draggingItemContent: ITodo = todoListCopy[draggingItem.current];
    const dragOverItemContent: ITodo = todoListCopy[dragoverItem.current];

    if (draggingItemContent.status !== dragOverItemContent.status) {
      draggingItemContent.updatedAt = getDateOfLastUpdate();
      draggingItemContent.status = dragOverItemContent.status;
    }

    todoListCopy.splice(draggingItem.current, 1);
    todoListCopy.splice(dragoverItem.current, 0, draggingItemContent);

    dispatch({ type: 'CHANGE', todoListCopy });
    draggingItem.current = dragoverItem.current;
    dragoverItem.current = null;
  };

  const itemCount: number = todoList
    .filter(applyAllFilters)
    .filter(item => item.status === status).length;

  const onDrop = (e: any) => {
    console.log('drop');
    console.log(drag);
    const test = todoList.filter((todoList: any) => todoList.isDrag);
    dispatch({
      type: 'DRAG',
      id: test[0].id,
      isDrag: false,
    });
    setDrag(-1);
  };

  const liRef = useRef<any>();
  return (
    <BoardWrapper
      data-status={status}
      onDragEnter={onDragEnter}
      onDrop={onDrop}
    >
      <BoardTitle>
        <BoardItemCount>{itemCount}</BoardItemCount>
        <BoardTitleText>{title}</BoardTitleText>
        <PlusButton onSubmit={handlePlusBtn} open={open} />
      </BoardTitle>
      <ItemWrapper>
        {open && <TodoInput onSubmit={handleTodoInput} status={status} />}
        {todoList.map((todo, index) => {
          if (!applyAllFilters(todo) || todo.status !== status) return null;

          return (
            <TodoItem
              key={todo.id}
              id={todo.id}
              index={index}
              taskName={todo.taskName}
              status={todo.status}
              createdAt={todo.createdAt}
              updatedAt={todo.updatedAt}
              importance={todo.importance}
              handleDragStart={handleDragStart}
              isDrag={todo.isDrag}
              drag={drag}
              setDrag={setDrag}
              liRef={liRef}
            />
          );
        })}
      </ItemWrapper>
    </BoardWrapper>
  );
}

const BoardWrapper = styled.div`
  min-height: 95vh;
  flex: 1;
  font-size: 1.5rem;
  color: #676c71;
  background-color: #f6f8fa;
  border-radius: 1rem;
  margin: 0.5rem;
`;

const BoardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 1rem 1rem 0 0;
  padding: 1rem 1.5rem;
`;

const BoardItemCount = styled.span`
  width: 2.3rem;
  height: 2.3rem;
  text-align: center;
  background-color: #e4e7ea;
  border-radius: 2rem;
  padding: 0.5rem;
`;

const BoardTitleText = styled.span`
  font-weight: 600;
`;

const ItemWrapper = styled.ul``;

export default TodoBoard;
