export function getScrollAnimation() {
  return {
    offscreen: {
      y: 150,
      opacity: 0,
    },
    onscreen: ({ duration = 2 } = {}) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration,
      },
    }),
  };
}

export function scrollAnimation2() {
  return {
    offscreen: {
      x: 150,
      opacity: 0,
    },
    onscreen: ({ duration = 2 } = {}) => ({
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration,
      },
    }),
  };
}
