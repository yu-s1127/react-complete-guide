import React, { FC } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense: FC = () => {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;
