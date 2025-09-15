import { Asset } from "./findLargestHolding";

export function calculateAssetAllocation(assets: Asset[]): { name: string; allocation: number }[] {
  let totalValue = 0;

  for (let i = 0; i < assets.length; i++) {
    totalValue += assets[i].value;
  }

  const allocations: { name: string; allocation: number }[] = [];

  for (let i = 0; i < assets.length; i++) {
    const allocation = totalValue === 0 ? 0 : (assets[i].value / totalValue) * 100;
    allocations.push({
      name: assets[i].name,
      allocation: parseFloat(allocation.toFixed(2))
    });
  }

  return allocations;
}
