import { MyLineChart } from "~/components/my-line-chart";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

function Investments() {
  const holdings = [
    {
      asset: "Apple Inc.",
      ticker: "AAPL",
      shares: 10,
      price: 150.0,
      percentChange: 1.5,
      totalValue: 1500.0,
    },
    {
      asset: "Microsoft Corporation",
      ticker: "MSFT",
      shares: 5,
      price: 300.0,
      percentChange: 2.0,
      totalValue: 1500.0,
    },
    {
      asset: "Tesla Inc.",
      ticker: "TSLA",
      shares: 8,
      price: 700.0,
      percentChange: -1.0,
      totalValue: 5600.0,
    },
    {
      asset: "Amazon.com Inc.",
      ticker: "AMZN",
      shares: 2,
      price: 3500.0,
      percentChange: 0.5,
      totalValue: 7000.0,
    },
    {
      asset: "Alphabet Inc.",
      ticker: "GOOGL",
      shares: 4,
      price: 2800.0,
      percentChange: 1.2,
      totalValue: 11200.0,
    },
  ];

  return (
    <>
      <h1 className="text-4xl font-bold">A list of your recent holdings</h1>

      <Table>
        <TableCaption>A list of your recent holdings.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Asset</TableHead>
            <TableHead>Percent Change</TableHead>
            <TableHead>Shares</TableHead>
            <TableHead className="text-right">Total Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {holdings.map((holding) => (
            <TableRow key={holding.ticker}>
              <TableCell className="font-medium">{holding.asset}</TableCell>
              <TableCell>{holding.percentChange}%</TableCell>
              <TableCell>{holding.shares} shares</TableCell>
              <TableCell className="text-right">
                ${holding.totalValue.toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">
              $
              {holdings
                .reduce((total, holding) => total + holding.totalValue, 0)
                .toFixed(2)}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>

      <div className="mt-6">
        <MyLineChart />
      </div>
    </>
  );
}

export default Investments;
