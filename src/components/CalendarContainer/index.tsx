import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { DateContext } from "../DateContext";
import { Header } from "../Header";
import { Content } from "../Content";
import styles from "./styles.module.css";
import "./index.css";

export interface CalendarContainerProps {}

export const CalendarContainer: React.FC<CalendarContainerProps> = () => {
  const today = dayjs();
  const [monthViewContext, setMonthViewContext] = useState({
    month: today.month() + 1,
    year: today.year(),
    lastUpdateType: "",
  });
  const selectedDateState = useState(dayjs());
  const userSelectedState = useState(false);
  const { month, year, lastUpdateType } = monthViewContext;
  useEffect(() => {
    switch (lastUpdateType) {
      case "month":
        selectedDateState[1](dayjs(new Date(year, month - 1, 1)));
        break;
      case "today":
        selectedDateState[1](dayjs());
        break;
      default:
        break;
    }
  }, [month, year, lastUpdateType]);
  return (
    <DateContext.Provider value={{ selectedDateState, userSelectedState }}>
      <div className={styles.mainContainer}>
        <Header month={month} year={year} setter={setMonthViewContext} />
        <div className={styles.contentWrapper}>
          <Content month={month} year={year} />
        </div>
      </div>
    </DateContext.Provider>
  );
};
