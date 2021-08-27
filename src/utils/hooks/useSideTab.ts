import { useState, Dispatch, SetStateAction } from 'react';

interface useSideTabType {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  fade: boolean;
  setFade: Dispatch<SetStateAction<boolean>>;
  onBackgroundClick: () => void;
  onItemClick: () => void;
  onAnimationEnd: () => void;
}

export default function useSideTab(): useSideTabType {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [fade, setFade] = useState<boolean>(true);

  const onBackgroundClick = (): void => {
    setFade(false);
  };

  const onItemClick = (): void => {
    setIsOpen(true);
    setFade(true);
  };

  const onAnimationEnd = (): void => {
    if (fade === false) {
      setIsOpen(false);
    }
  };

  return {
    isOpen,
    setIsOpen,
    fade,
    setFade,
    onBackgroundClick,
    onItemClick,
    onAnimationEnd,
  };
}
