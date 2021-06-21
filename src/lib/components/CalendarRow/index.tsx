import dayjs from "dayjs";
import React from "react";
import { CalendarCell } from "../CalendarCell";
import { ContentProps } from "../Content";
import { DateContext } from "../DateContext";
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
      <DateContext.Consumer>
        {(props) => {
          return [...Array(7).keys()].map((i) => {
            const cellDate = rowStartDate.add(i, "day");
            return (
              <CalendarCell
                key={i}
                date={cellDate}
                displayMonth={displayMonth}
                dateContext={props}
              />
            );
          });
        }}
      </DateContext.Consumer>
    </div>
  );
};
