import React, { FC } from 'react';
import ExpenseItem from './ExpenseItem';

import ExpenseData from '../../types/ExpenseData';
import './ExpenseList.css';

interface Props {
  expenses: ExpenseData[];
}

const ExpenseList: FC<Props> = ({ expenses }) => {
  if (expenses.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }

  return (
    <ul className="expenses-list">
      {expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={expense.id}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
