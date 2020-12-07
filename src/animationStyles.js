export const x = 200
export const y = -200

export const transitionStyles = {
    entering: { opacity: 1, },
    entered:  { opacity: 1, transform: `translateX(0) translateY(0)`},
    exiting:  { opacity: 1, },
    exited:  { opacity: 1, transform: `translateX(${x}px) translateY(${y}px) rotate(180deg)`},
  };