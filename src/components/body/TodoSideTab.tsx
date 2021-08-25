import React from 'react';
import styled from 'styled-components';

interface TodoSideTabProps {
  children: React.ReactElement;
}

function TodoSideTab({ children }: TodoSideTabProps): React.ReactElement {
  return <SideTabWrapper>{children}</SideTabWrapper>;
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
  z-index: 999;
`;
