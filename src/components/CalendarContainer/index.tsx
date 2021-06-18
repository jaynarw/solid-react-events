import React, { useState } from "react";
import dayjs from "dayjs";
import { DateContext } from "../DateContext";
import { Header } from "../Header";
import { Content } from "../Content";
import styles from "./styles.module.css";
import "./index.css";

export interface CalendarContainerProps {}

export const CalendarContainer: React.FC<CalendarContainerProps> = () => {
  const [month, setMonth] = useState(dayjs().month() + 1);
  const [year, setYear] = useState(dayjs().year());
  return (
    <DateContext>
      <div className={styles.mainContainer}>
        <Header month={month} year={year} setter={{ setMonth, setYear }} />
        <div className={styles.contentWrapper}>
          <Content month={month} year={year} />
        </div>
      </div>
    </DateContext>
  );
};
