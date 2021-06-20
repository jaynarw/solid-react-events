import dayjs from "dayjs";
import React from "react";
import cn from "classnames";
import styles from "./styles.module.css";
import { ContentProps } from "../Content";
import { CalendarLabels } from "../CalendarLabels";
import { DateConsumerProps } from "../DateContext";
import { filterEventsIn, formatICS } from "../../eventsUtil";

export interface CalendarCellProps {
  date: dayjs.Dayjs;
  displayMonth?: ContentProps["month"];
  dateContext: DateConsumerProps;
}

export const CalendarCell: React.FC<CalendarCellProps> = ({
  date,
  displayMonth,
  dateContext,
}) => {
  const textDate = date.format("dddd, MMMM DD");
  if (!dateContext) return null;
  const {
    selectedDateState: [selectedDate, setSelectedDate],
    userSelectedState: [userSelected, setUserSelected],
    eventsState: [events],
  } = dateContext;
  const isSelected = userSelected && selectedDate.isSame(date, "day");
  const setDate: () => void = () => {
    setSelectedDate(date);
    setUserSelected(true);
  };
  return (
    <div
      role="gridcell"
      aria-label={textDate}
      className={styles.calendarCell}
      tabIndex={-1}
    >
      <div
        className={styles.calendarCellInner}
        role="button"
        tabIndex={0}
        onClick={setDate}
        onKeyUp={setDate}
      >
        <div
          className={cn(
            styles.calendarCellText,
            {
              [styles.thisMonth]:
                displayMonth && date.month() + 1 === displayMonth,
            },
            isSelected && styles.selectedDate
          )}
          style={{
            width: date.date() === 1 ? "auto" : undefined,
          }}
        >
          {date.date() === 1 ? date.format("DD MMM") : date.format("DD")}
        </div>
        <div>
          {events && (
            <CalendarLabels
              events={formatICS(filterEventsIn(events, date, "day", true))}
            />
          )}
          <div
            className={cn(styles.calendarText, styles.calendarTextPlaceholder)}
          />
        </div>
      </div>
    </div>
  );
};
