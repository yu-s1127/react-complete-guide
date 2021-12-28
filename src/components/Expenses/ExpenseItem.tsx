import React, { FC } from 'react';

import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

interface Props {
  title: string;
  amount: number;
  date: Date;
}

const ExpenseItem: FC<Props> = ({ date, title, amount }) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
