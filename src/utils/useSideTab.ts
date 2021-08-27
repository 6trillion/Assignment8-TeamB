import { useState } from 'react';

export function useSideTab() {
  const [isOpen, setIsOpen] = useState(false);
  const [fade, setFade] = useState(true);

  const onBackgroundClick = () => {
    setFade(false);
  };

  const onItemClick = () => {
    setIsOpen(true);
    setFade(true);
  };

  const onAnimationEnd = () => {
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
