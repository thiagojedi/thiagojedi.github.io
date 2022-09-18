import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

export const formatDate = (date: Date) => {
  console.log(date);
  return dayjs(date).format("DD/MM/YY");
}

export const sortByDate = <T>(func: (x: T) => string) => (a: T, b: T) =>
  dayjs(func(b)).valueOf() -
  dayjs(func(a)).valueOf();
