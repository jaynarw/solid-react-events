import React from "react";
import dayjs from "dayjs";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { Button } from "../Button";
import styles from "./styles.module.css";

export interface HeaderProps {
  month: number;
  year: number;
  setter: {
    setMonth: React.Dispatch<React.SetStateAction<number>>;
    setYear: React.Dispatch<React.SetStateAction<number>>;
  };
}

function goPrevMonth(
  month: number,
  year: number,
  setter: {
    setMonth: React.Dispatch<React.SetStateAction<number>>;
    setYear: React.Dispatch<React.SetStateAction<number>>;
  }
) {
  const { setMonth, setYear } = setter;
  if (month === 1) {
    setMonth(12);
    setYear(year - 1);
  } else {
    setMonth(month - 1);
  }
}
function goNextMonth(
  month: number,
  year: number,
  setter: {
    setMonth: React.Dispatch<React.SetStateAction<number>>;
    setYear: React.Dispatch<React.SetStateAction<number>>;
  }
) {
  const { setMonth, setYear } = setter;
  if (month === 12) {
    setMonth(1);
    setYear(year + 1);
  } else {
    setMonth(month + 1);
  }
}

function goToday(setter: {
  setMonth: React.Dispatch<React.SetStateAction<number>>;
  setYear: React.Dispatch<React.SetStateAction<number>>;
}) {
  const { setMonth, setYear } = setter;
  setMonth(dayjs().month() + 1);
  setYear(dayjs().year());
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
        <Button onClick={() => goPrevMonth(month, year, setter)}>
          <MdNavigateBefore fontSize={32} />
        </Button>
        <Button onClick={() => goToday(setter)}>Today</Button>
        <Button onClick={() => goNextMonth(month, year, setter)}>
          <MdNavigateNext fontSize={32} />
        </Button>
      </div>
    </div>
  );
};
