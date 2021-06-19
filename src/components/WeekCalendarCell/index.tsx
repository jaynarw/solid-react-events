import dayjs from "dayjs";
import React from "react";
import cn from "classnames";
import styles from "./styles.module.css";
// import { ContentProps } from "../Content";
// import { DateConsumerProps } from "../DateContext";

export interface WeekCalendarCellProps {
  date?: dayjs.Dayjs;
}

export const WeekCalendarCell: React.FC<WeekCalendarCellProps> = ({ date }) => {
  const textDate = date ? date.format("dddd, MMMM DD h A") : "";
  const setDate = () => console.log();
  return (
    <div
      role="gridcell"
      aria-label={textDate}
      className={styles.calendarCell}
      tabIndex={-1}
    >
      <div
        className={styles.calendarCellInner}
        style={{ minHeight: date ? "2.75em" : undefined }}
        role="button"
        tabIndex={0}
        onClick={setDate}
        onKeyUp={setDate}
      >
        <div
          className={cn(styles.calendarCellText)}
          style={{
            width: date && date.date() === 1 ? "auto" : undefined,
            height: date ? "1.375em" : undefined,
          }}
        />
        {/* <div>
          <div className="mbsc-calendar-labels"></div>
          <div className="mbsc-calendar-text mbsc-calendar-text-placeholder"></div>
        </div> */}
      </div>
    </div>
  );
};
