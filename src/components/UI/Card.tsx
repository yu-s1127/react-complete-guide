import React, { FC, HTMLAttributes } from 'react';
import './Card.css';

const Card: FC<HTMLAttributes<HTMLDivElement>> = (
  { children, className },
  ...props
) => {
  const classes = 'card ' + className;
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;
