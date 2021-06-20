import dayjs from "dayjs";

export type displayTypeType = "month" | "week" | "day";
export type monthViewType = {
  month: number;
  year: number;
};
export type eventType = {
  location: string;
  description: string;
  summary: string;
  startDate: string | number | Date | dayjs.Dayjs;
  endDate: string | number | Date | dayjs.Dayjs;
};
