import { ContextAmoutConsumer } from "../context/ContextAmout";

export default function useIcomeExpenses() {
  const { transactions } = ContextAmoutConsumer();
  const amounts = transactions.map((transaction) => transaction.amount);

  const negativeNumber =
    amounts.filter((item) => item < 0).reduce((a, number) => (a += number), 0) *
    -1;

  const positiveNumber = amounts
    .filter((item) => item > 0)
    .reduce((a, number) => (a += number), 0);
  return { positiveNumber, negativeNumber };
}
