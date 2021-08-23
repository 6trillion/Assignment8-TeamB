import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { STATUS } from 'constants/index';

interface TodoItemProps {
  taskName: string;
  status: string;
  createdAt: string;
}

function TodoItem({ taskName, status, createdAt }: TodoItemProps) {
  const [statIcon, setStatIcon] = useState('🤍');
  useEffect(() => {
    checkStatus();
  }, []);

  const checkStatus = () => {
    switch (status) {
      case STATUS.NOT_STARTED:
        setStatIcon('💚');
        break;
      case STATUS.ONGOING:
        setStatIcon('💛');
        break;
      case STATUS.FINISHED:
        setStatIcon('💖');
        break;
      default:
        setStatIcon('🤍');
        break;
    }
  };

  return (
    <ItemWrapper>
      <ItemStatusIcon>{statIcon}</ItemStatusIcon>
      <ItemContent>
        <ItemTitle>{taskName}</ItemTitle>
        <div>{createdAt}</div>
        {/* <div>분류</div> */}
      </ItemContent>
    </ItemWrapper>
  );
}

export default TodoItem;

const ItemWrapper = styled.li`
  display: flex;
  line-height: 2rem;
  font-size: 1.4rem;
  box-shadow: 0rem 0.3rem 0.9rem -0.8rem #0000003b;
  background-color: #fff;
  border: 1px solid #eeeeee;
  border-radius: 1rem;
  margin-bottom: 1rem;
  padding: 0.8rem;
`;

const ItemStatusIcon = styled.div`
  font-size: 1.3rem;
`;

const ItemContent = styled.div`
  margin-left: 0.8rem;
`;

const ItemTitle = styled.div`
  font-weight: 600;
`;
