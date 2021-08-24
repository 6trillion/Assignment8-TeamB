import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderLayout>
      <HeaderLayer>
        <HeaderA href="https://www.moduparking.com/">
          <HeaderImg src="https://i0.wp.com/www.moduparking.com/wp-content/uploads/2021/02/cropped-BI_모두의주차장RGB-04.png?fit=1063%2C265&ssl=1" />
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
  max-width: 291px;
`;

export default Header;
