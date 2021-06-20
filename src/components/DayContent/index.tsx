import dayjs from "dayjs";
import React from "react";
import cn from "classnames";
import { WeekCalendarCell } from "../WeekCalendarCell";
import styles from "./styles.module.css";

export interface DayContentProps {
  date: dayjs.Dayjs;
}

const baseHour = dayjs(new Date(2021, 0, 1, 0, 0, 0, 0));
const hoursInDay = [...new Array(25).keys()].map((hourInterval) =>
  baseHour.add(hourInterval, "hour").format("h A")
);

export const DayContent: React.FC<DayContentProps> = ({ date }) => {
  return (
    <div className={styles.content}>
      <table role="grid" className={styles.calendarTable}>
        <tbody className={styles.tbody}>
          {hoursInDay.map((hour, hourIndex) => (
            <tr
              className={cn(
                styles.calendarRow,
                hourIndex === 0 && styles.firstRow
              )}
            >
              <td width="50px" className={styles.calendarCell}>
                <span className={styles.hourText}>{hour}</span>
              </td>
              <WeekCalendarCell date={date} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
