import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

export const formatDate = (date: string) =>
  dayjs(date, 'DD/MM/YYYY').format('DD/MM/YY');

export const sortByDate =
  <T>(func: (x: T) => string) =>
  (a: T, b: T) =>
    dayjs(func(b), 'DD/MM/YYYY').valueOf() -
    dayjs(func(a), 'DD/MM/YYYY').valueOf();
