import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import LocalizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(LocalizedFormat);
dayjs.extend(utc);

export const convertToUTC = (date: Date) => {
  return dayjs.utc(date);
};

export const convertFromUTC = (date: Date | string, format: string = "LL") => {
  return dayjs
    .utc(date, format)
    .local()
    .format(format);
};

export const diffDates = (date1: Date | string, date2: Date | string = dayjs.utc().format()) => {
  return dayjs.utc(date1).diff(dayjs.utc(date2), "week");
};

export const getToday = () => {
  return dayjs.utc().format();
};
