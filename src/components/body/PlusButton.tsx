import React, { useState } from 'react';
import styled from 'styled-components';

interface PlusButtonProps {
  onSubmit: (open: boolean) => void;
  open: boolean;
}

const PlusButton: React.FC<PlusButtonProps> = ({ onSubmit, open }) => {
  const handleOnClick = () => {
    onSubmit(!open);
  };
  return <Button onClick={handleOnClick}>+</Button>;
};

export default PlusButton;

const Button = styled.button`
  border: none;
  background-color: transparent;
  font-size: 2rem;
  cursor: pointer;
  padding: 0;
`;
