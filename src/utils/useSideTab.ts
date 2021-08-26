import React, { useState } from 'react';

export function useSideTab() {
  const [isOpen, setIsOpen] = useState(false);
  const [fade, setFade] = useState(true);

  const onBackgroundClick = () => {
    // 배경 클릭했을 때 fadeout animation 작동
    setFade(false);
  };

  const onItemClick = () => {
    setIsOpen(true);
    setFade(true); // 초기값이 true여서 없어도 상관없을거같긴한데 테스트좀 부탁드릴게요
  };

  const onAnimationEnd = () => {
    // fadeout일때만 tab 닫기
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
