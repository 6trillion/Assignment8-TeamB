import React from 'react';
import styled from 'styled-components';

function PlusButton() {
  const handleOnClick = () => {
    console.log('click');
  };
  return <Button onClick={handleOnClick}>+</Button>;
}

export default PlusButton;

const Button = styled.button`
  border: none;
  background-color: transparent;
  font-size: 2rem;
  cursor: pointer;
  padding: 0;
`;
