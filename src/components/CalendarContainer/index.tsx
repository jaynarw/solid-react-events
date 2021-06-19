import React, { useState } from "react";
import dayjs from "dayjs";
import { DateContext } from "../DateContext";
import { Header } from "../Header";
import { Content } from "../Content";
import { WeekContent } from "../WeekContent";
import styles from "./styles.module.css";
import "./index.css";
import { displayTypeType } from "./types";

export interface CalendarContainerProps {}

export const CalendarContainer: React.FC<CalendarContainerProps> = () => {
  const today = dayjs();
  const [monthViewContext, setMonthViewContext] = useState({
    month: today.month() + 1,
    year: today.year(),
  });
  const [displayType, setDisplayType] = useState<displayTypeType>("month");
  const selectedDateState = useState(dayjs());
  const userSelectedState = useState(false);
  const { month, year } = monthViewContext;
  const dateContextValue = {
    selectedDateState,
    userSelectedState,
    displayTypeState: [displayType, setDisplayType],
  };

  return (
    <DateContext.Provider value={dateContextValue}>
      <div className={styles.mainContainer}>
        <Header
          month={month}
          year={year}
          displayType={displayType}
          setDisplayType={setDisplayType}
          setter={{
            setMonthViewContext,
            setSelectedDate: selectedDateState[1],
          }}
        />
        <div className={styles.contentWrapper}>
          {displayType === "month" && <Content month={month} year={year} />}
          {displayType === "week" && (
            <WeekContent date={selectedDateState[0]} />
          )}
        </div>
      </div>
    </DateContext.Provider>
  );
};
