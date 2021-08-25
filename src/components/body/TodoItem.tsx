import { ReactElement, useState, useEffect } from 'react';
import styled from 'styled-components';
import { STATUS } from 'constants/index';
import TodoSideTab from 'components/body/TodoSideTab';
import TodoItemDetail from 'components/body/TodoItemDetail';

interface TodoItemProps {
  taskName: string;
  status: string;
  createdAt: string;
}

function TodoItem({
  taskName,
  status,
  createdAt,
}: TodoItemProps): ReactElement {
  const [statIcon, setStatIcon] = useState('🤍');
  const [show, setShow] = useState(false);
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

  const handleTitleOnClick = () => {
    setShow(!show);
  };

  return (
    <>
      <ItemWrapper>
        <ItemStatusIcon>{statIcon}</ItemStatusIcon>
        <ItemContent>
          <ItemTitle onClick={handleTitleOnClick}>{taskName}</ItemTitle>
          <div>{createdAt}</div>
          {/* <div>분류</div> */}
        </ItemContent>
      </ItemWrapper>
      {show && (
        <>
          <TodoSideTab>
            <TodoItemDetail
              taskName={taskName}
              status={statIcon}
              createdAt={createdAt}
            />
          </TodoSideTab>
          <BackGround onClick={handleTitleOnClick}></BackGround>
        </>
      )}
    </>
  );
}

export default TodoItem;

export const ItemWrapper = styled.li`
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
  cursor: pointer;
`;

const BackGround = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #00000016;
  z-index: 1;
`;
