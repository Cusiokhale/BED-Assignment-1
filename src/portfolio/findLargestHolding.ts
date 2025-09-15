export interface Asset {
  name: string;             
  value: number;             
}

export function findLargestHolding(assets: Asset[]): Asset | null {
  if (assets.length === 0) return null;

  let largest = assets[0];

  // Loop through all assets
  for (let i = 1; i < assets.length; i++) {
    if (assets[i].value > largest.value) {
      largest = assets[i];
    }
  }

  return largest;
}

