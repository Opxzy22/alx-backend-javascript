/**
 * Cleans the set by extracting substrings from values that start with a specified string.
 * @param {Set} set - The set to be cleaned.
 * @param {string} startString - The starting string to filter values in the set.
 * @returns {string} - A hyphen-separated string of cleaned substrings.
 */
export default function cleanSet(set, startString) {
    // Check if the input types are valid
    if (!(set instanceof Set) || typeof startString !== 'string') {
      return '';
    }
  
    // Convert set values to an array, filter values starting with startString, and extract substrings
    const filteredValues = Array.from(set.values())
      .filter((elem) => elem.startsWith(startString))
      .map((elem) => elem.substring(startString.length));
  
    // Join the cleaned substrings with hyphens and return the result
    return filteredValues.join('-');
  }
  