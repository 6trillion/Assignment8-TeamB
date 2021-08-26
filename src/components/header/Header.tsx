import { Dispatch, SetStateAction, ReactElement, useState } from 'react';
import styled from 'styled-components';
import TodoSideTab from 'components/body/TodoSideTab';
import Filter from 'components/Filter';
import { date, Importance } from 'types/index';

interface HeaderProps {
  createdAtPeriod: date[];
  setCreatedAtPeriod: Dispatch<SetStateAction<date[]>>;
  setImportance: Dispatch<SetStateAction<Importance>>;
  importance: Importance;
}

function Header({
  createdAtPeriod,
  setCreatedAtPeriod,
  setImportance,
  importance,
}: HeaderProps): ReactElement {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <HeaderLayout>
      <HeaderLayer>
        <HeaderA href="https://www.moduparking.com/">
          <HeaderImg src="https://i0.wp.com/www.moduparking.com/wp-content/uploads/2021/02/cropped-BI_모두의주차장RGB-04.png?fit=1063%2C265&ssl=1" />
        </HeaderA>
      </HeaderLayer>
      <ButtonWrap onClick={() => setIsOpen(!isOpen)}>필터</ButtonWrap>
      {isOpen && (
        <>
          <TodoSideTab>
            <Filter
              createdAtPeriod={createdAtPeriod}
              setCreatedAtPeriod={setCreatedAtPeriod}
              setImportance={setImportance}
              setIsOpen={setIsOpen}
              importance={importance}
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
  justify-content: space-between;
`;

const HeaderLayer = styled.div``;

const HeaderA = styled.a`
  cursor: pointer;
`;

const HeaderImg = styled.img`
  padding: 1rem;
  max-width: 291px;
  margin-left: 10%;
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

const ButtonWrap = styled.button`
  background: skyblue;
  padding: 1.5rem;
  color: white;
  border: 2px solid skyblue;
  border-radius: 10px;
  margin-right: 5%;
  cursor: pointer;
  &:hover {
    background-color: #48b4e0;
    border: 2px solid #48b4e0;
  }
  &:active {
    position: relative;
    top: 2px;
  }
`;
export default Header;
