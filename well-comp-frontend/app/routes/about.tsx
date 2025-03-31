import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About WELL-FI" },
    { name: "description", content: "Learn more about WELL-FI, your AI-powered financial wellness companion." },
  ];
}

function About() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">About WELL-FI</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        WELL-FI is an AI-powered financial wellness companion designed to help
        users manage their finances, understand financial products, and receive
        personalized recommendations to improve their financial health.
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-6 mb-2">
        Our Mission
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Our goal is to simplify financial decision-making by providing
        data-driven insights and tools that empower users to take control of
        their money. Whether you are budgeting, saving, or investing, WELL-FI
        is here to support your financial journey.
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-6 mb-2">
        Features
      </h2>
      <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
        <li>Smart Budgeting & Expense Tracking</li>
        <li>Personalized Financial Advice</li>
        <li>Goal-Based Savings & Investment Recommendations</li>
        <li>AI-Powered Credit & Loan Guidance</li>
        <li>Spending Alerts & Fraud Detection</li>
      </ul>
    </div>
  );
}

export default About;
