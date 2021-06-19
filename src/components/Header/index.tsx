/* eslint-disable indent */
import React from "react";
import dayjs from "dayjs";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { Button } from "../Button";
import styles from "./styles.module.css";

export interface HeaderProps {
  month: number;
  year: number;
  setter: React.Dispatch<React.SetStateAction<{ month: number; year: number }>>;
}

function updateDate(
  month: number,
  year: number,
  setter: React.Dispatch<React.SetStateAction<{ month: number; year: number }>>,
  updateType: "previous" | "next" | "today"
) {
  let updatedMonth = month;
  let updatedYear = year;
  const today = dayjs();
  // eslint-disable-next-line default-case
  switch (updateType) {
    case "previous":
      if (month === 1) {
        updatedMonth = 12;
        updatedYear -= 1;
      }
      break;
    case "next":
      if (month === 12) {
        updatedMonth = 1;
        updatedYear += 1;
      }
      break;
    case "today":
      updatedMonth = today.month() + 1;
      updatedYear = today.year();
      break;
  }
  return setter({ year: updatedYear, month: updatedMonth });
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
