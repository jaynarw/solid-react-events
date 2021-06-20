/* eslint-disable indent */
import React from "react";
import dayjs from "dayjs";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { Button } from "../Button";
import styles from "./styles.module.css";
import updateDate from "./updateDate";
import { DateContext } from "../DateContext";
import { displayTypeType } from "../CalendarContainer/types";

export interface HeaderProps {
  month: number;
  year: number;
  displayType: displayTypeType;
  setDisplayType: React.Dispatch<React.SetStateAction<displayTypeType>>;
}

export const Header: React.FC<HeaderProps> = ({
  month,
  year,
  displayType,
  setDisplayType,
}) => {
  return (
    <div className={styles.headerWrapper}>
      <h1>
        <strong>{dayjs(`2019-${month}-21`).format("MMMM")}</strong> {year}
      </h1>
      <DateContext.Consumer>
        {(value) => {
          if (!value) return null;
          const { selectedDateState, monthViewState } = value;
          return (
            <>
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
                <Button
                  onClick={() =>
                    updateDate(month, year, setter, displayType, "previous")
                  }
                >
                  <MdNavigateBefore fontSize={32} />
                </Button>
                <Button
                  onClick={() =>
                    updateDate(month, year, setter, displayType, "today")
                  }
                >
                  Today
                </Button>
                <Button
                  onClick={() =>
                    updateDate(month, year, setter, displayType, "next")
                  }
                >
                  <MdNavigateNext fontSize={32} />
                </Button>
              </div>
            </>
          );
        }}
      </DateContext.Consumer>
    </div>
  );
};
