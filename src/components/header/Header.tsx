import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderLayout>
      <HeaderLayer>
        <HeaderA href="https://hayanmind.com/">
          <HeaderImg src="https://hayanmind.com/static/media/HayanMind_Logo.6b1e04b4.svg" />
        </HeaderA>
      </HeaderLayer>
    </HeaderLayout>
  );
};

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
`;

export default Header;
