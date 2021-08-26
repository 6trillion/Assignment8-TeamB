import { ReactElement, useState, useEffect } from 'react';
import TodoSideTab from 'components/body/TodoSideTab';
import TodoItemDetail from 'components/body/TodoItemDetail';
import { useSideTab } from 'utils/useSideTab';
import { STATUS } from 'constants/index';
import styled from 'styled-components';

interface TodoItemProps {
  id: number;
  taskName: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  importance: string;
}

function TodoItem({
  id,
  taskName,
  status,
  createdAt,
  updatedAt,
  importance,
}: TodoItemProps): ReactElement {
  const [statIcon, setStatIcon] = useState('🤍');
  const [importanceIcon, setImportanceIcon] = useState('');
  const {
    isOpen,
    setIsOpen,
    fade,
    onBackgroundClick,
    onItemClick,
    onAnimationEnd,
  } = useSideTab();

  useEffect(() => {
    checkStatus();
    checkImportance();
  }, [importance, isOpen]);

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

  const checkImportance = () => {
    switch (importance) {
      case 'high':
        setImportanceIcon('🔥');
        break;
      case 'low':
        setImportanceIcon('🎵');
        break;
      default:
        setImportanceIcon('');
        break;
    }
  };

  return (
    <>
      <ItemWrapper>
        <ItemStatusIcon>{statIcon}</ItemStatusIcon>
        <ItemContentWrapper>
          <ItemTitle onClick={onItemClick}>{taskName}</ItemTitle>
          <ItemContent>created at {createdAt}</ItemContent>
          <ItemContent>{importanceIcon}</ItemContent>
        </ItemContentWrapper>
      </ItemWrapper>
      {isOpen && (
        <>
          <TodoSideTab
            fade={fade}
            setIsOpen={setIsOpen}
            onAnimationEnd={onAnimationEnd}
          >
            <TodoItemDetail
              id={id}
              taskName={taskName}
              status={statIcon}
              createdAt={createdAt}
              updatedAt={updatedAt}
              importance={importance}
            />
          </TodoSideTab>
          <BackGround onClick={onBackgroundClick}></BackGround>
        </>
      )}
    </>
  );
}

export default TodoItem;

export const ItemWrapper = styled.li`
  display: flex;
  line-height: 2rem;
  font-size: 1.5rem;
  box-shadow: 0rem 0.3rem 0.9rem -0.8rem #0000003b;
  background-color: #fff;
  border: 1px solid #eeeeee;
  border-radius: 1rem;
  margin-bottom: 1rem;
  padding: 1.5rem 0.8rem;
`;

const ItemStatusIcon = styled.div`
  font-size: 1.3rem;
`;

const ItemContentWrapper = styled.div`
  margin-left: 0.8rem;
`;

const ItemTitle = styled.div`
  font-weight: 600;
  cursor: pointer;
  color: #242424;
`;

const ItemContent = styled.div`
  font-size: 1.4rem;
  color: #a9a9a9;
`;

export const BackGround = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #00000036;
  z-index: 1;
`;
