import dayjs from "dayjs";

export const formatDate = (date: Date | undefined) => {
  return dayjs(date).add(3, "h").format("DD/MM/YY");
};

export const longDate = (date: Date, lang = "pt-br") =>
  dayjs(date).add(3, "h").toDate().toLocaleDateString(lang, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
