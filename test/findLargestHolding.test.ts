import { Asset, findLargestHolding } from "../src/portfolio/findLargestHolding";

describe('findLargestHolding', () => {
    test('should return the asset with the highest value', () => {
        const assets: Asset[] = [
            { name: 'House', value: 300000 },
            { name: 'Stocks', value: 150000 },
            { name: 'Bonds', value: 50000 },
            { name: 'Artwork', value: 10000 },
        ];

        const result = findLargestHolding(assets);
        expect(result?.name).toBe('House');
    });

    test('should return null when the array is empty', () => {
        const result = findLargestHolding([]);
        expect(result).toBeNull();
    });

    test('should return the first asset when values are tied', () => {
        const assets: Asset[] = [
            { name: 'Stocks', value: 100000 },
            { name: 'Bonds', value: 100000 },
            { name: 'Treasury Bills', value: 5000 },

        ];

        const result = findLargestHolding(assets);
        expect(result?.name).toBe('Stocks');
    });
});