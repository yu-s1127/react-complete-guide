import React, { FC } from 'react';

import ExpenseItem from './ExpenseItem';
import './Expenses.css';

interface Expense {
  title: string;
  amount: number;
  date: Date;
}

interface Props {
  expenses: Expense[];
}

const Expenses: FC<Props> = ({ expenses }) => {
  return (
    <div className="expenses">
      {expenses.map((expense, index) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={index}
        />
      ))}
    </div>
  );
};

export default Expenses;
