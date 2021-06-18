import React from "react";
import { DateConsumer, DateContext } from "../DateContext";
import { Header } from "../Header";
import { Content } from "../Content";
import styles from "./styles.module.css";
import "./index.css";

export interface CalendarContainerProps {}

export const CalendarContainer: React.FC<CalendarContainerProps> = () => {
  return (
    <DateContext>
      <div className={styles.mainContainer}>
        <DateConsumer>
          {(value) => {
            if (!value) return null;
            const {
              selectedDate: [selectedDate, setSelectedDate],
            } = value;
            const month = selectedDate.month() + 1;
            const year = selectedDate.year();
            return (
              <>
                <Header month={month} year={year} setter={setSelectedDate} />
                <div className={styles.contentWrapper}>
                  <Content month={month} year={year} />
                </div>
              </>
            );
          }}
        </DateConsumer>
      </div>
    </DateContext>
  );
};
