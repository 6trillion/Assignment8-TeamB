import { Dispatch, SetStateAction, ReactElement } from 'react';
import styled, { keyframes } from 'styled-components';

interface TodoSideTabProps {
  fade: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  onAnimationEnd: () => void;
  children: ReactElement;
}

function TodoSideTab({
  fade,
  children,
  onAnimationEnd,
}: TodoSideTabProps): ReactElement {
  return (
    <SideTabWrapper onAnimationEnd={onAnimationEnd} fade={fade}>
      {children}
    </SideTabWrapper>
  );
}

const fadeIn = keyframes`
 from {
   transform : translateX(30rem);
 }
 to {
   transform: translateX(0);
 }
`;

const fadeOut = keyframes`
 from {
   transform: translateX(0);
 }
 to {
   transform: translateX(30rem);
 }
`;

const SideTabWrapper = styled.div<{ fade: boolean }>`
  width: 30rem;
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
  animation-duration: 0.4s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  animation-name: ${({ fade }) => (fade ? fadeIn : fadeOut)};
`;

export default TodoSideTab;
