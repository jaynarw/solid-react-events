/* eslint-disable indent */
import React, { useContext } from "react";
import dayjs from "dayjs";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { Button } from "../Button";
import styles from "./styles.module.css";
import updateDate from "./updateDate";
import { DateContext } from "../DateContext";

export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const CalendarStates = useContext(DateContext);
  if (!CalendarStates) return null;
  const { displayTypeState, monthViewState } = CalendarStates;
  const { month, year } = monthViewState[0];
  const [, setDisplayType] = displayTypeState;
  return (
    <div className={styles.headerWrapper}>
      <h1>
        <strong>{dayjs(`2019-${month}-21`).format("MMMM")}</strong> {year}
      </h1>
      <div className={styles.buttonGroup}>
        <Button className={styles.tagButton}>Day</Button>
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
    </div>
  );
};
