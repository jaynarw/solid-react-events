/* eslint-disable indent */
import React, { useContext } from "react";
import dayjs from "dayjs";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import cn from "classnames";
import { Button } from "../Button";
import styles from "./styles.module.css";
import updateDate from "./updateDate";
import { DateContext } from "../DateContext";

export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const CalendarStates = useContext(DateContext);
  if (!CalendarStates) return null;
  const {
    displayTypeState,
    monthViewState,
    selectedDateState: [selectedDate],
  } = CalendarStates;
  const { month, year } = monthViewState[0];
  const [displayType, setDisplayType] = displayTypeState;
  const dateFormat = displayType === "day" ? "D MMMM" : "MMMM";
  const displayDate =
    displayType === "day" ? selectedDate : dayjs(`2019-${month}-21`);
  return (
    <div className={styles.headerWrapper}>
      <h1 style={{ flexGrow: 1, margin: "0.22em 0" }}>
        <strong className={styles.month}>
          {displayDate.format(dateFormat)}
        </strong>{" "}
        <span className={styles.year}>{year}</span>
      </h1>
      <div className={cn(styles.buttonGroup, styles.center)}>
        <Button
          className={styles.tagButton}
          onClick={() => setDisplayType("day")}
        >
          Day
        </Button>
        <Button
          className={styles.tagButton}
          onClick={() => setDisplayType("week")}
        >
          Week
        </Button>
        <Button
          className={styles.tagButton}
          onClick={() => setDisplayType("month")}
        >
          Month
        </Button>
      </div>
      <div className={styles.buttonGroup}>
        <Button onClick={() => updateDate("previous", CalendarStates)}>
          <MdNavigateBefore fontSize={32} />
        </Button>
        <Button onClick={() => updateDate("today", CalendarStates)}>
          Today
        </Button>
        <Button onClick={() => updateDate("next", CalendarStates)}>
          <MdNavigateNext fontSize={32} />
        </Button>
      </div>
      {displayType === "day" && (
        <h2 className={styles.weekdayText}>{displayDate.format("dddd")}</h2>
      )}
    </div>
  );
};
