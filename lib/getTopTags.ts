export default function getMostOccurringTags<T>(arr: T[], count: number): T[] {
  const occurrences = {} as Record<string, number>;

  arr.forEach((value) => {
    const key = JSON.stringify(value);
    occurrences[key] = (occurrences[key] || 0) + 1;
  });

  const sortedValues = Object.keys(occurrences)
    .sort((a, b) => occurrences[b] - occurrences[a])
    .map((key) => JSON.parse(key) as T);

  return sortedValues.slice(0, count);
}
