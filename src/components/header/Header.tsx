import { Dispatch, SetStateAction, ReactElement } from 'react';
import TodoSideTab from 'components/body/TodoSideTab/TodoSideTab';
import { BackGround } from 'components/body/TodoBoard/TodoItem';
import { Filter } from 'components/header';
import { date, Importance } from 'types/index';
import { useSideTab } from 'utils/index';
import styled from 'styled-components';

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
  const {
    isOpen,
    setIsOpen,
    fade,
    setFade,
    onBackgroundClick,
    onItemClick,
    onAnimationEnd,
  } = useSideTab();

  return (
    <HeaderLayout>
      <HeaderLayer>
        <HeaderA href="https://www.moduparking.com/">
          <HeaderImg src="https://i0.wp.com/www.moduparking.com/wp-content/uploads/2021/02/cropped-BI_모두의주차장RGB-04.png?fit=1063%2C265&ssl=1" />
        </HeaderA>
      </HeaderLayer>
      <ButtonWrap onClick={onItemClick}>필터</ButtonWrap>
      {isOpen && (
        <>
          <TodoSideTab
            fade={fade}
            setIsOpen={setIsOpen}
            onAnimationEnd={onAnimationEnd}
          >
            <Filter
              createdAtPeriod={createdAtPeriod}
              setCreatedAtPeriod={setCreatedAtPeriod}
              importance={importance}
              setImportance={setImportance}
              setFade={setFade}
            />
          </TodoSideTab>
          <BackGround onClick={onBackgroundClick}></BackGround>
        </>
      )}
    </HeaderLayout>
  );
}

const HeaderLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 6px 0px;
  position: fixed;
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

const ButtonWrap = styled.button`
  color: white;
  border: 2px solid skyblue;
  border-radius: 10px;
  background: skyblue;
  cursor: pointer;
  margin-right: 5%;
  padding: 1.5rem;

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
