import dayjs from "dayjs";
import React from "react";
import { CalendarCell } from "../CalendarCell";
import { ContentProps } from "../Content";
import styles from "./styles.module.css";

export interface CalendarRowProps {
  rowStartDate: dayjs.Dayjs;
  displayMonth: ContentProps["month"];
}

export const CalendarRow: React.FC<CalendarRowProps> = ({
  rowStartDate,
  displayMonth,
}) => {
  return (
    <div role="row" className={styles.calendarRow}>
      {[...Array(7).keys()].map((i) => (
        <CalendarCell
          date={rowStartDate.add(i, "day")}
          displayMonth={displayMonth}
        />
      ))}
    </div>
  );
};
