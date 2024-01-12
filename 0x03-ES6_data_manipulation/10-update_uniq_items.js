export default function updateUniqueItems(itemsMap) {
  // Check if the argument is a map
  if (!(itemsMap instanceof Map)) {
    throw new Error('Cannot process. Argument is not a map.');
  }

  // Loop through map entries and update quantities
  for (const [item, quantity] of itemsMap.entries()) {
    if (quantity === 1) {
      itemsMap.set(item, 100);
    }
  }

  return itemsMap;
}
