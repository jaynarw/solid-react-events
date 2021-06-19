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
      <div role="grid" className={styles.calendarTable}>
        <div className={styles.calendarWeekDays}>
          <div className={styles.calendarWeekDay} />
          {daysInWeek.map((day: string, index) => (
            <div key={day} aria-label={day} className={styles.calendarWeekDay}>
              {day.slice(0, 3)} {firstDayOfWeek.add(index, "day").format("DD")}
            </div>
          ))}
        </div>
        {hoursInDay.map((hour, hourIndex) => (
          <div
            className={cn(
              styles.calendarRow,
              hourIndex === 0 && styles.firstRow
            )}
          >
            <div className={styles.calendarCell}>
              <span className={styles.hourText}>{hour}</span>
            </div>
            {daysInWeek.map((day: string, index) => (
              <WeekCalendarCell
                date={
                  hourIndex !== 0
                    ? firstDayOfWeek.add(index, "day").add(hourIndex, "hour")
                    : undefined
                }
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
