import React from 'react';
import styled from 'styled-components';

interface TodoSideTabProps {
  taskName: string;
  status: string;
  createdAt: string;
}

function TodoSideTab({ taskName, status, createdAt }: TodoSideTabProps) {
  return (
    <SideTabWrapper>
      <SideTabTitle>
        {status} {taskName}
      </SideTabTitle>
      <div>생성일 : {createdAt}</div>
      <LongButton>EDIT</LongButton>
      <RedButton>DELETE</RedButton>
    </SideTabWrapper>
  );
}

export default TodoSideTab;

const SideTabWrapper = styled.div`
  width: 30%;
  min-width: 30rem;
  height: 100%;
  position: fixed;
  top: 5rem;
  right: 0;
  background-color: #fff;
  box-shadow: 0rem 0.3rem 0.9rem -0.6rem #0000005b;
  padding: 2rem;
  z-index: 999;
`;

const SideTabTitle = styled.div`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
`;

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
