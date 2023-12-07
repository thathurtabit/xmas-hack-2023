export const formatCurrency = (amount: number): string => {
  const flooredAmount = Math.floor(amount);
  return flooredAmount.toLocaleString();
}