import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("./routes/home.tsx"),
  route("about", "./routes/about.tsx"),
  route("advice", "./routes/advice.tsx"),
  route("expenses", "./routes/expenses.tsx"),
  route("taxcalculator", "./routes/taxcalculator.tsx"),
  route("budget", "./routes/budget.tsx"),
  route("investments", "./routes/investments.tsx"),
  route("aiassistant", "./components/aiassistant.tsx"),

] satisfies RouteConfig;
