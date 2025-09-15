import { calculateAssetAllocation } from "../src/portfolio/calculateAssetAllocation";
import { Asset } from "../src/portfolio/findLargestHolding";

describe('calculateAssetAllocation', () => {
  test('should return equal allocation for even values', () => {
    const assets: Asset[] = [
      { name: 'House in Maldives', value: 100 },
      { name: 'Condo in Miami', value: 100 },
      { name: 'Estate in Abuja, Nigeria', value: 100  },
    ];

    const result = calculateAssetAllocation(assets);
    expect(result).toEqual([
      { name: 'House in Maldives', allocation: 33.33 },
      { name: 'Condo in Miami', allocation: 33.33 },
      { name: 'Estate in Abuja, Nigeria', allocation: 33.33 },
    ]);
  });

  test('should return correct allocation for uneven values', () => {
    const assets: Asset[] = [
      { name: 'House', value: 300 },
      { name: 'Stocks', value: 100 },
    ];

    const result = calculateAssetAllocation(assets);
    expect(result).toEqual([
      { name: 'House', allocation: 75 },
      { name: 'Stocks', allocation: 25 },
    ]);
  });

  test('should return 0 allocation when array is empty', () => {
    const result = calculateAssetAllocation([]);
    expect(result).toEqual([]);
  });
});