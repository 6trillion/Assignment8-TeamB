import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

interface TodoSideTabProps {
  taskName: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  importance: string;
  show: boolean;
}

function TodoSideTab({
  taskName,
  status,
  createdAt,
  updatedAt,
  importance,
  show,
}: TodoSideTabProps) {
  return (
    <SideTabWrapper>
      <div>
        <SideTabTitle>
          {status} {taskName}
        </SideTabTitle>
        <ItemContent>
          {importance !== 'none' && '중요도 ' + importance}
        </ItemContent>
        <ItemContent>created at {createdAt}</ItemContent>
        <ItemContent>last update at {createdAt}</ItemContent>
      </div>
      <ButtonWrapper>
        <LongButton>EDIT</LongButton>
        <RedButton>DELETE</RedButton>
      </ButtonWrapper>
    </SideTabWrapper>
  );
}

export default TodoSideTab;

const animate = keyframes`
 from {
   transform : translateX(200px)
 }
 to {
   transform: translateX(0px;)
 }
`;

const SideTabWrapper = styled.div`
  width: 30%;
  min-width: 30rem;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0rem 0.3rem 0.9rem -0.6rem #0000005b;
  padding: 2rem;
  z-index: 999;
  animation-duration: 0.2s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  animation-name: ${animate};
`;

const SideTabTitle = styled.div`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
`;

const ItemContent = styled.div`
  line-height: 2.2rem;
  font-size: 1.4rem;
  color: #a9a9a9;
`;

const ButtonWrapper = styled.div``;

const LongButton = styled.button`
  width: 100%;
  border: 1px solid #dcdcdc;
  border-radius: 0.8rem;
  cursor: pointer;
  margin-top: 0.8rem;
  padding: 0.8rem;
`;

const RedButton = styled(LongButton)`
  background-color: #eb7e7e;
  color: #fff;
  border: 1px solid #ca6d6d;
`;
