import React, { FC } from 'react';
import './Card.css';

interface Props {
  className: string;
}
const Card: FC<Props> = (props) => {
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
