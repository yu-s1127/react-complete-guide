import React, { ChangeEvent, FC, FormEvent, useState } from 'react';

import Expense from '../../types/Expense';
import './ExpenseForm.css';
interface Props {
  onSaveExpenseData: (enteredExpenseData: Expense) => void;
  onCancel: () => void;
}

const ExpenseForm: FC<Props> = ({ onSaveExpenseData, onCancel }) => {
  const [enteredTitle, setEnteredTitle] = useState<string>('');
  const [enteredAmount, setEnteredAmount] = useState<string>('');
  const [enteredDate, setEnteredDate] = useState<string>('');

  const titleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: parseInt(enteredAmount),
      date: new Date(enteredDate),
    };

    onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
