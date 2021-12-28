import React, { FC, useState } from 'react';

import ExpenseForm from './ExpenseForm';
import Expense from '../../types/Expense';
import ExpenseData from '../../types/ExpenseData';
import './NewExpense.css';

interface Props {
  onAddExpense: (expenses: ExpenseData) => void;
}

const NewExpense: FC<Props> = ({ onAddExpense }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const saveExpenseDataHandler = (enteredExpenseData: Expense) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
