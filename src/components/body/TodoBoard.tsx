import React, { useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { PlusButton } from 'components/body';
import { TodoItem } from 'components/body';
import { TodoInput } from 'components/body';
import { ITodo } from 'types/index';

import { useTodosDispatch } from 'utils/TodosContext';

interface TodoBoardProps {
  title: string;
  status: string;
  todoList: ITodo[];
  applyAllFilters: any;
  draggingItem: any;
  dragoverItem: any;
}

function TodoBoard({
  title,
  status,
  todoList,
  applyAllFilters,
  draggingItem,
  dragoverItem,
}: TodoBoardProps) {
  const [open, setOpen] = useState(false);
  const dispatch = useTodosDispatch();

  const handleTodoInput = (data: boolean) => {
    setOpen(data);
  };

  const handlePlusBtn = (data: boolean) => {
    setOpen(data);
  };

  const onDragEnter = (e: any) => {
    e.preventDefault();

    const id = e.target.dataset.index;

    if (!id && e.target !== e.currentTarget) return;

    handleDragEnter(e, id);
  };

  const handleDragStart = (e: any, id: any) => {
    draggingItem.current = id;
  };

  const todofilterlist = todoList.filter(item => item.status === status);

  const handleDragEnter = (e: any, id: any) => {
    const listCopy = [...todoList];

    if (!id) {
      const dragging = listCopy[draggingItem.current];
      let test = listCopy
        .slice()
        .reverse()
        .findIndex(todo => todo.status === e.target.dataset.status);
      dragging.status = e.target.dataset.status;

      if (test === -1) {
        listCopy.splice(draggingItem.current, 1);
        listCopy.splice(0, 0, dragging);

        draggingItem.current = 0;
        dragoverItem.current = null;

        dispatch({ type: 'TEST', listCopy });
        return;
      }

      test = listCopy.length - test - 1;

      if (test < draggingItem.current) {
        listCopy.splice(draggingItem.current, 1);
        listCopy.splice(test + 1, 0, dragging);
        test += 1;
      } else if (test > draggingItem.current) {
        listCopy.splice(draggingItem.current, 1);
        listCopy.splice(test, 0, dragging);
      } else {
        return;
      }

      draggingItem.current = test;
      dragoverItem.current = null;

      dispatch({ type: 'TEST', listCopy });
      return;
    }

    dragoverItem.current = id;

    if (draggingItem.current === null) return;
    if (dragoverItem.current === null) return;

    if (draggingItem.current === dragoverItem.current) return;

    const draggingItemContent = listCopy[draggingItem.current];
    const dragOverItemContent = listCopy[dragoverItem.current];

    if (draggingItemContent.status !== dragOverItemContent.status) {
      draggingItemContent.status = dragOverItemContent.status;
    }

    listCopy.splice(draggingItem.current, 1);
    listCopy.splice(dragoverItem.current, 0, draggingItemContent);

    draggingItem.current = dragoverItem.current;
    dragoverItem.current = null;

    dispatch({ type: 'TEST', listCopy });
  };

  return (
    <BoardWrapper data-status={status} onDragEnter={onDragEnter}>
      <BoardTitle>
        <BoardItemCount>{todofilterlist.length}</BoardItemCount>
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
            />
          );
        })}
      </ItemWrapper>
    </BoardWrapper>
  );
}

export default TodoBoard;

const BoardWrapper = styled.div`
  min-height: 95vh;
  flex: 1;
  font-size: 1.5rem;
  color: #676c71;
  background-color: #f6f8fa;
  /* border: 1px solid #e6e6e6; */
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

const ItemWrapper = styled.ul`
  /* padding: 0 1rem; */

  .draggable {
    cursor: move;
  }

  .draggable.dragging {
    opacity: 0.5;
  }
`;
