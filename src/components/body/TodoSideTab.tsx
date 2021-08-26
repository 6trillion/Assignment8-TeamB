import React from 'react';
import styled, { keyframes } from 'styled-components';

interface TodoSideTabProps {
  children: React.ReactElement;
}

function TodoSideTab({ children }: TodoSideTabProps): React.ReactElement {
  return <SideTabWrapper>{children}</SideTabWrapper>;
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
  z-index: 999;
  animation-duration: 0.2s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  animation-name: ${animate};
`;
