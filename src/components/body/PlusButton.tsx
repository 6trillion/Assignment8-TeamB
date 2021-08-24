import React, { useState } from 'react';
import styled from 'styled-components';

interface PlusButtonProps {
  onSubmit: (open: boolean) => void;
}

const PlusButton: React.FC<PlusButtonProps> = ({ onSubmit }) => {
  const [open, setOpen] = useState(false);

  const handleOnClick = () => {
    setOpen(!open);
    onSubmit(open);
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
