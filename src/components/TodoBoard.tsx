import React from 'react';
import styled from 'styled-components';
import PlusButton from './PlusButton';
import TodoItem from './TodoItem';
import 'styles/reset.css';
import { STATUS, TODO_ITEM_LIST } from 'constants/index';

type Itodo = {
  id: number;
  taskName: string;
  status: string;
  createdAt: string;
  updatedAt: string;
};

interface TodoBoardProps {
  title: string;
  todolist: Itodo[];
}

function TodoBoard({ title, todolist }: TodoBoardProps) {
  return (
    <BoardWrapper>
      <BoardTitle>
        <BoardItemCount>{todolist.length}</BoardItemCount>
        <BoardTitleText>{title}</BoardTitleText>
        <PlusButton />
      </BoardTitle>
      <ItemWrapper>
        {todolist.map(todo => (
          <TodoItem
            taskName={todo.taskName}
            status={todo.status}
            createdAt={todo.createdAt}
          />
        ))}
      </ItemWrapper>
    </BoardWrapper>
  );
}

export default TodoBoard;

const BoardWrapper = styled.div`
  height: 95vh;
  flex: 1;
  font-size: 1.5rem;
  color: #676c71;
  background-color: #f6f8fa;
  border: 1px solid #e6e6e6;
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
  padding: 0 1rem;
`;
