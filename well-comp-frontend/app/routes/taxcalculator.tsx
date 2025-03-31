import React, {useState} from "react";
import { calculateTax } from "~/api";

const TaxCaclulator = () => {
  const [icome,setIncome] = useState<number>(0);
  const [period, setPeriod] = useState<string>("yearly");
  const [country, setCountry] = useState<string>("CA");
  const [result, setResult] = useState<any>(null);

  const handleCalculate = async () => {
    const data = await calculateTax(icome, period, country);
    if(data){
      setResult(data);
    }
};
return (
    <div>
        <h2>Tax Deduction Calculator</h2>
        <input 
            type="number" 
            placeholder="Enter your income" 
            onChange={(e) => setIncome(Number(e.target.value))}
        />
        <select onChange={(e) => setPeriod(e.target.value)}>
            <option value="yearly">Yearly</option>
            <option value="monthly">Monthly</option>
        </select>
        <select onChange={(e) => setCountry(e.target.value)}>
            <option value="Canada">Canada</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Germany">Germany</option>
        </select>
        <button onClick={handleCalculate}>Calculate Tax</button>

        {result && (
            <div>
                <h3>Tax Calculation Results</h3>
                <p>Tax Deducted: ${result.tax_deducted}</p>
                <p>Net Income After Tax: ${result.net_income}</p>
            </div>
        )}
    </div>
);

};
export default TaxCaclulator;