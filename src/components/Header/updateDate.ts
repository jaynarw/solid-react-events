import React from "react";
import dayjs from "dayjs";
import { displayTypeType, monthViewType } from "../CalendarContainer/types";

export default function updateDate(
  month: number,
  year: number,
  setter: {
    setMonthViewContext: React.Dispatch<React.SetStateAction<monthViewType>>;
    setSelectedDate: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>;
  },
  displayType: displayTypeType,
  updateType: "previous" | "next" | "today"
) {
  const { setMonthViewContext, setSelectedDate } = setter;
  let updatedMonth = month;
  let updatedYear = year;
  let updatedDate = 1;
  const today = dayjs();
  // eslint-disable-next-line default-case
  switch (updateType) {
    case "previous":
      if (month === 1) {
        updatedMonth = 12;
        updatedYear -= 1;
      } else {
        updatedMonth -= 1;
      }
      break;
    case "next":
      if (month === 12) {
        updatedMonth = 1;
        updatedYear += 1;
      } else {
        updatedMonth += 1;
      }
      break;
    case "today":
      updatedMonth = today.month() + 1;
      updatedYear = today.year();
      updatedDate = today.date();
      break;
  }
  const newDate = dayjs(
    new Date(updatedYear, updatedMonth - 1, updatedDate, 0, 0, 0, 0)
  );
  setMonthViewContext({ year: updatedYear, month: updatedMonth });
  setSelectedDate(newDate);
}
