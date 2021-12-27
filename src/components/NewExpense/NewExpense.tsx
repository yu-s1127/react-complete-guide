import React, { FC } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

interface ExpenseData {
  title: string;
  amount: string;
  date: Date;
}
const NewExpense: FC = () => {
  const saveExpenseDataHandler = (enteredExpenseData: ExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
