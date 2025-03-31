import axios from "axios";

interface FinancialAdviceResponse{
    advice: string;
}

const API_URL = "http://127.0.0.1:8000";
export const getFinancialAdvice = async (): Promise<FinancialAdviceResponse | null> =>{
    try{
        const response = await axios.get<FinancialAdviceResponse>(`${API_URL}/financial-advice/`);
        return response.data;
    }
    catch(error){
        console.error("Error fetching financial advice:", error);
        return null;
    }

}

export const calculateTax = async(income:number,period:string, country:string) =>{
    try{
        const response = await axios.post(`${API_URL}/calculate-tax/`,{
            income: income,
            period: period,
            country: country
        });
        return response.data;
    }
    catch(error){
        console.error("Error calculating tax:", error);
        return null;
    }
}

export const addExpense = async(category:string, amount:number) =>{
    try{
        const response = await axios.post(`${API_URL}/add-expense/`,{
            amount: amount,
            category: category
        });
        return response.data;
    }
    catch(error){
        console.error("Error adding expense:", error);
        return null;
    }
}

export const getExpenses = async() =>{
    try{
        const response = await axios.get(`${API_URL}/expenses/`);
        return Array.isArray(response.data.expenses) ? response.data.expenses : [];
    }
    catch(error){
        console.error("Error fetching expenses:", error);
        return null;
    }
}

export const getTotalExpenses = async() =>{
    try{
        const response = await axios.get(`${API_URL}/total-expenses/`);
        return response.data.total_expenses;
    }
    catch(error){
        console.error("Error fetching total expenses:", error);
        return null;
    }
}

export const deleteExpense = async(id:number) =>{
    try{
        const response = await axios.delete(`${API_URL}/delete-expense/${id}/`);
        return response.data;
    }
    catch(error){
        console.error("Error deleting expense:", error);
        return null;
    }
}