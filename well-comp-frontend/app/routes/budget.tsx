import { useEffect, useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import "chart.js/auto";

export default function BudgetPage() {
  const [budgetData, setBudgetData] = useState({ labels: [], datasets: [] });
  const [pieData, setPieData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiEndpoint = "http://localhost:5173/get-budget/"
        const response = await fetch(apiEndpoint);
        const data = await response.json();
        setBudgetData(data.budgetData);
        setPieData(data.pieData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white col-span-2">
        Budget Tracker
      </h1>

      <div className="p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-800">
        <h2 className="text-xl font-semibold">Income</h2>
        <p className="text-green-600 text-2xl font-bold">$5000</p>
      </div>

      <div className="p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-800">
        <h2 className="text-xl font-semibold">Expenses</h2>
        <p className="text-red-600 text-2xl font-bold">$2500</p>
      </div>

      <div className="p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-800 md:col-span-2">
        <h2 className="text-xl font-semibold">Savings</h2>
        <p className="text-blue-600 text-2xl font-bold">$1500</p>
      </div>

      <div className="p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-800 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex justify-center">
          <div className="w-80 h-80">
            <h2 className="text-xl font-semibold">Budget Overview</h2>
            <Bar data={budgetData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-80 h-80">
            <h2 className="text-xl font-semibold">Budget Distribution</h2>
            <Pie data={pieData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>
      </div>
    </div>
  );
}
