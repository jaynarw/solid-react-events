/* eslint-disable indent */
import React from "react";
import dayjs from "dayjs";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { Button } from "../Button";
import styles from "./styles.module.css";

export interface HeaderProps {
  month: number;
  year: number;
  setter: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>;
}

function updateDate(
  month: number,
  year: number,
  setter: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>,
  updateType: "previous" | "next" | "today"
) {
  let updatedMonth = month;
  let updatedYear = year;
  switch (updateType) {
    case "previous":
      if (month === 1) {
        updatedMonth = 12;
        updatedYear -= 1;
      }
      return setter(dayjs(new Date(updatedYear, updatedMonth, 1)));
    case "next":
      if (month === 12) {
        updatedMonth = 1;
        updatedYear += 1;
      }
      return setter(dayjs(new Date(updatedYear, updatedMonth, 1)));
    case "today":
      return setter(dayjs());
    default:
      return setter(dayjs());
    // Do Nothing
  }
}

export const Header: React.FC<HeaderProps> = ({ month, year, setter }) => {
  return (
    <div className={styles.headerWrapper}>
      <h1>
        <strong>{dayjs(`2019-${month}-21`).format("MMMM")}</strong> {year}
      </h1>
      <div className={styles.buttonGroup}>
        <Button className={styles.tagButton}>Day</Button>
        <Button className={styles.tagButton}>Week</Button>
        <Button className={styles.tagButton}>Month</Button>
        <Button className={styles.tagButton}>Year</Button>
      </div>
      <div className={styles.buttonGroup}>
        <Button onClick={() => updateDate(month, year, setter, "previous")}>
          <MdNavigateBefore fontSize={32} />
        </Button>
        <Button onClick={() => updateDate(month, year, setter, "today")}>
          Today
        </Button>
        <Button onClick={() => updateDate(month, year, setter, "next")}>
          <MdNavigateNext fontSize={32} />
        </Button>
      </div>
    </div>
  );
};
