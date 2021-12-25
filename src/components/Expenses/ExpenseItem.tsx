import React, { FC, useState } from 'react';

import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

interface Props {
  title: string;
  amount: number;
  date: Date;
}

const ExpenseItem: FC<Props> = (props) => {
  const [title, setTitle] = useState<string>(props.title);

  const clickHandler = () => {
    setTitle('Updated!!!');
    console.log('Clicked!!!');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
