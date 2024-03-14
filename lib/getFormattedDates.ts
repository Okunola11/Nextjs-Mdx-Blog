export default function getFormattedDates(dateString: string): string {
  return new Intl.DateTimeFormat("en-us", { dateStyle: "long" }).format(
    new Date(dateString)
  );
}
