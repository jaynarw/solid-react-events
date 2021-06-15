import dayjs from "dayjs";
import React from "react";
import cn from "classnames";
import styles from "./styles.module.css";
import { ContentProps } from "../Content";

export interface CalendarCellProps {
  date: dayjs.Dayjs;
  displayMonth: ContentProps["month"];
}

export const CalendarCell: React.FC<CalendarCellProps> = ({
  date,
  displayMonth,
}) => {
  const textDate = date.format("dddd, MMMM DD");
  return (
    <div
      role="gridcell"
      aria-label={textDate}
      className={styles.calendarCell}
      tabIndex={-1}
    >
      <div className={styles.calendarCellInner}>
        <div
          className={cn(styles.calendarCellText, {
            [styles.thisMonth]: date.month() + 1 === displayMonth,
          })}
        >
          {date.format("DD")}
        </div>
        {/* <div>
          <div className="mbsc-calendar-labels"></div>
          <div className="mbsc-calendar-text mbsc-calendar-text-placeholder"></div>
        </div> */}
      </div>
    </div>
  );
};
