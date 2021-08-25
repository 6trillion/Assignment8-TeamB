import { Dispatch, SetStateAction, ReactElement, useState } from 'react';
import styled from 'styled-components';

import TodoSideTab from 'components/body/TodoSideTab';
import Filter from 'components/Filter';

import { date } from 'types/index';

interface HeaderProps {
  createdAtPeriod: date[];
  setCreatedAtPeriod: Dispatch<SetStateAction<date[]>>;
}

function Header({
  createdAtPeriod,
  setCreatedAtPeriod,
}: HeaderProps): ReactElement {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <HeaderLayout>
      <HeaderLayer>
        <HeaderA href="https://www.moduparking.com/">
          <HeaderImg src="https://i0.wp.com/www.moduparking.com/wp-content/uploads/2021/02/cropped-BI_모두의주차장RGB-04.png?fit=1063%2C265&ssl=1" />
        </HeaderA>
      </HeaderLayer>
      <button onClick={() => setIsOpen(!isOpen)}>버튼</button>
      {isOpen && (
        <>
          <TodoSideTab>
            <Filter
              createdAtPeriod={createdAtPeriod}
              setCreatedAtPeriod={setCreatedAtPeriod}
              setIsOpen={setIsOpen}
            />
          </TodoSideTab>
          <BackGround onClick={() => setIsOpen(false)}></BackGround>
        </>
      )}
    </HeaderLayout>
  );
}

const HeaderLayout = styled.div`
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 6px 0px;
  display: flex;
  align-items: center;
  position: fixed;
`;

const HeaderLayer = styled.div``;

const HeaderA = styled.a`
  cursor: pointer;
`;

const HeaderImg = styled.img`
  padding: 1rem;
  max-width: 291px;
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

export default Header;
