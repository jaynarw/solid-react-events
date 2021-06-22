import dayjs from "dayjs";
import React from "react";
import cn from "classnames";
import { WeekCalendarCell } from "../WeekCalendarCell";
import styles from "./styles.module.css";

export interface WeekContentProps {
  date: dayjs.Dayjs;
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

const baseHour = dayjs(new Date(2021, 0, 1, 0, 0, 0, 0));
const hoursInDay = [...new Array(25).keys()].map((hourInterval) =>
  baseHour.add(hourInterval, "hour").format("h A")
);

function showMonth(firstDayOfWeek: dayjs.Dayjs, index: number) {
  if (index === 0) return false;
  return (
    firstDayOfWeek.add(index - 1, "day").month() !==
    firstDayOfWeek.add(index, "day").month()
  );
}

export const WeekContent: React.FC<WeekContentProps> = ({ date }) => {
  const weekday = date.day();
  const firstDayOfWeek = date
    .hour(0)
    .second(0)
    .minute(0)
    .millisecond(0)
    .add(-weekday, "day");
  return (
    <div className={styles.content}>
      <table role="grid" className={styles.calendarTable}>
        <thead className={styles.calendarWeekDays}>
          <tr className={styles.calendarRow}>
            <td
              width="50px"
              className={cn(styles.calendarWeekDay, styles.calendarColTitle)}
            />
            {daysInWeek.map((day: string, index) => (
              <td key={day} aria-label={day} className={styles.calendarWeekDay}>
                {day.slice(0, 3)}{" "}
                {firstDayOfWeek
                  .add(index, "day")
                  .format(`D ${showMonth(firstDayOfWeek, index) ? "MMM" : ""}`)}
              </td>
            ))}
          </tr>
        </thead>
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
              {daysInWeek.map((_: string, index) => (
                <WeekCalendarCell
                  date={
                    hourIndex !== 0
                      ? firstDayOfWeek.add(index, "day").add(hourIndex, "hour")
                      : undefined
                  }
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
