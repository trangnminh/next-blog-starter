import { format, parseISO } from "date-fns";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>{format(date, "hh:mm:ss b dd/LL/yyyy O")}</time>
  );
};

export default DateFormatter;
