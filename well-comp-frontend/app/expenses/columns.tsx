"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Expense = {
  id: string
  amount: number
  category: "Food" | "Movies" | "Music"
  email: string
}

export const columns: ColumnDef<Expense>[] = [
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
]
