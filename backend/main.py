from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import openai

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

openai.api_key = "sk-proj-QhrfRIKln9X_pwxcGBNMZhyNbWiSLqKnXAB_8H95IN-BPNTvIJh2EW01l5CBU6nXW7WYUk8JNDT3BlbkFJXo1OxIe_FU50bbQwyFyzlDrok6Hnf4InKoWcCArO3bnR-47DxtVeQysozbMCTdiVBw2VD1ew0ANEW"
expenses = []

@app.get("/")
async def root():
    return {"message": "Welcome to SunLife AI Financial Companion Hello"}

@app.get("/financial-advice/")
async def get_advice():
    return {"advice": "Save 20% of your income and invest wisely."}
class AIRequest(BaseModel):
    user_question:str

@app.post("/ask-ai/")
async def ai_response(data: AIRequest):
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": "You are a financial expert.Give clear, practical financial advice."},
            {"role": "user", "content": data.user_question}
        ]
    )
    return {"advice:": response.choices[0].message["content"]}

class IncomeData(BaseModel):
    income: float
    period: str
    country: str

TAX_RATES = {
    "US": 0.25,
    "CA": 0.30,
    "UK": 0.20,
}

@app.post("/calculate-tax/")
async def calculate_tax(data: IncomeData):
    tax_rate = TAX_RATES.get(data.country, 0.25)
    yearly_icome = data.income * 12 if data.period == "monthly" else data.income
    tax_deducted = yearly_icome * tax_rate
    net_income = yearly_icome - tax_deducted
    return {"net_income": net_income, "tax_deducted": tax_deducted}

class Expense(BaseModel):
    amount: float
    category: str

@app.post("/add-expense/")
async def add_expense(expense:Expense):
    expense_data = {"category": expense.category, "income": expense.amount}
    expenses.append(expense_data)
    return {"message": "Expense added successfully"}

@app.get("/expenses/")
async def get_expenses():
    return {"expenses": expenses}

@app.get("/expenses-by-category/")
async def get_expenses_by_category(category:str):
    category_expenses = [expense["income"] for expense in expenses if expense["category"] == category]
    return {"category_expenses": category_expenses}

@app.post("/delete-expense/")
async def delete_expense(index: int):
    if index < len(expenses):
        expenses.pop(index)
        return {"message": "Expense deleted successfully"}
    return {"message": "Expense not found"}

@app.get("/total-expenses/")
async def get_total_expenses():
    total_expenses = sum([expense["income"] for expense in expenses])
    return {"total_expenses": total_expenses}

@app.post("ai-expense-analysis/")
async def ai_expense_analysis():
    total_expenses = sum([expense["income"] for expense in expenses])
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": "You are a financial expert. Analyze the expenses."},
            {"role": "user", "content": f"The total expenses are {total_expenses}"}
        ]
    )
    return {"analysis": response.choices[0].message["content"]}

class SavingsGoal(BaseModel):
    goal_name:str
    target_amount: float
    current_savings: float
    months: int

@app.post("/calculate-savings-plan/")
async def calculate_savings_plan(data: SavingsGoal):
    amount_to_save = data.target_amount - data.current_savings
    monthly_savings = amount_to_save / data.months if data.months > 0 else 0
    return {"monthly_savings": monthly_savings}

class InvestmentRequest(BaseModel):
    risk_level: str
    investment_amount:float

@app.post("/recommend-investment/")
async def recommend_investment(data: InvestmentRequest):
    portfolio = {
        "low":{"Bonds":70, "Stocks":20, "Real Estate":10},
        "medium":{"Bonds":50, "Stocks":30, "Real Estate":20},
        "high":{"Bonds":30, "Stocks":50, "Real Estate":20},
    }
    recommended_portfolio = portfolio.get(data.risk_level)
    investment_allocation = {asset: (recommended_portfolio[asset] / 100) * data.investment_amount for asset in recommended_portfolio}
    return {"investment_allocation": investment_allocation}


@app.post("/get-budget/")
async def get_budget(data):
    dummy_budget_data = {
        "labels": ["Rent", "Utilities", "Groceries", "Transportation", "Entertainment"],
        "datasets": [
            {
                "label": "Monthly Budget",
                "data": [1200, 300, 400, 150, 200],
                "backgroundColor": [
                    "rgba(255, 99, 132, 0.6)",
                    "rgba(54, 162, 235, 0.6)",
                    "rgba(255, 206, 86, 0.6)",
                    "rgba(75, 192, 192, 0.6)",
                    "rgba(153, 102, 255, 0.6)"
                ],
            }
        ],
    }
    return {"budgetData": dummy_budget_data}
