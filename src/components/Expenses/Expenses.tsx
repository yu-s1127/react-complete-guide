import React, { FC, useState } from 'react';

import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpenseData from '../../types/ExpenseData';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';

interface Props {
  expenses: ExpenseData[];
}

const Expenses: FC<Props> = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState<string>('2021');

  const filterChangeYear = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeYear}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList expenses={filteredExpenses} />
    </div>
  );
};

export default Expenses;
