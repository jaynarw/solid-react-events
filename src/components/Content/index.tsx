import React from "react";
import dayjs from "dayjs";
import styles from "./styles.module.css";
import { CalendarRow } from "../CalendarRow";

export interface ContentProps {
  month: number;
  year: number;
}

const daysInWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const Content: React.FC<ContentProps> = ({ month, year }) => {
  const firstDayOfMonth = dayjs(`${year}-${month}-01`);
  const weekday = firstDayOfMonth.day();
  const initialDate = firstDayOfMonth.add(-weekday, "day");
  const rowDates = [...Array(6).keys()].map((i) =>
    initialDate.add(7 * i, "day")
  );
  return (
    <div className={styles.content}>
      <div role="grid" className={styles.calendarTable}>
        <div className={styles.calendarWeekDays}>
          {daysInWeek.map((day: string) => (
            <div key={day} aria-label={day} className={styles.calendarWeekDay}>
              {day.slice(0, 3)}
            </div>
          ))}
        </div>
        {rowDates.map((date) => (
          <CalendarRow
            key={date.format("DD/MM/YYYY")}
            rowStartDate={date}
            displayMonth={month}
          />
        ))}
      </div>
    </div>
  );
};
