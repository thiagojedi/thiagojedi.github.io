import dayjs from "dayjs";

export const formatDate = (date: Date | undefined) => {
  return dayjs(date).format("DD/MM/YY");
};
