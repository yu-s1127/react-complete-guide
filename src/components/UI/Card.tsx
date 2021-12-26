import React, { FC, HtmlHTMLAttributes } from 'react';
import './Card.css';

const Card: FC<HtmlHTMLAttributes<HTMLDivElement>> = (props) => {
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
