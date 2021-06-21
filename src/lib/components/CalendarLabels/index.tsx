import React from "react";
import cn from "classnames";
import styles from "./styles.module.css";

export interface CalendarLabelsProps {
  events?: { title: string; color: string; id: number | string }[];
}

export const CalendarLabels: React.FC<CalendarLabelsProps> = ({
  events = [],
}) => {
  return (
    <div className={styles.calendarLabels}>
      {events.map(({ title, color, id }) => (
        <div
          className={cn(styles.calendarText, styles.ltr, styles.calendarLabel)}
          title={title}
          data-id={id}
          style={{ color }}
        >
          <div className={styles.calendarLabelBackground} />
          <div
            className="mbsc-calendar-label-inner"
            style={{ color: "rgb(255, 255, 255)" }}
          >
            <div className={cn(styles.calendarLabelText)}>{title}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
