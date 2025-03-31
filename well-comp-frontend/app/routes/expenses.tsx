import React, { useEffect, useState } from "react";
import {
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
  TableFooter,
} from "../components/ui/table";

import { addExpense, getExpenses, getTotalExpenses } from "../api"; 

interface Expense {
  category: string;
  income: number;
}

function Expenses() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [totalExpenses, setTotalExpenses] = useState<number>(0);
  const [category, setCategory] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);

  // Fetch expenses on initial load
  useEffect(() => {
    const fetchExpenses = async () => {
      const expenseData = await getExpenses();
      if (expenseData) {
        setExpenses(expenseData);
      }

      const totalData = await getTotalExpenses();
      if (totalData !== null) {
        setTotalExpenses(totalData);
      }
    };
    fetchExpenses();
  }, []);

  const handleAddExpense = async () => {
    if (!category || amount <= 0) {
      alert("Please fill out both fields.");
      return;
    }

    const response = await addExpense(category, amount);
    if (response) {
      const updatedExpenses = await getExpenses();
      if (updatedExpenses) {
        setExpenses(updatedExpenses);
      }

      const totalData = await getTotalExpenses();
      if (totalData !== null) {
        setTotalExpenses(totalData);
      }

      setCategory("");
      setAmount(0);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Track Your Expenses</h1>
      
      {}
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border border-gray-300 rounded-md flex-1"
        />
        <input
          type="number"
          placeholder="Amount"

          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="p-2 border border-gray-300 rounded-md flex-1"
        />
        <button
          onClick={handleAddExpense}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add Expense
        </button>
      </div>

      {}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Category</TableHead>
            <TableHead>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {expenses.length === 0 ? (
            <TableRow>
              <TableCell colSpan={2} className="text-center text-gray-500">
                No expenses added yet.
              </TableCell>
            </TableRow>
          ) : (
            expenses.map((expense, index) => (
              <TableRow key={index}>
                <TableCell>{expense.category}</TableCell>
                <TableCell>{expense.income}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={2} className="text-right font-semibold">
              Total Expenses: ${totalExpenses}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}

export default Expenses;
