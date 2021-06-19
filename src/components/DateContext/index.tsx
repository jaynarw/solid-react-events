import dayjs from "dayjs";
import React, { useState, createContext } from "react";

const { Consumer, Provider } = createContext<{
  selectedDate: [
    dayjs.Dayjs,
    React.Dispatch<React.SetStateAction<dayjs.Dayjs>>
  ];
  userSelected: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
} | null>(null);

export interface DateContextProps {
  children: React.ReactNode;
}

export const DateContext: React.FC<DateContextProps> = ({ children }) => {
  const selectedDate = useState(dayjs());
  const userSelected = useState(false);
  return <Provider value={{ selectedDate, userSelected }}>{children}</Provider>;
};

export const DateConsumer = Consumer;
export type DateConsumerProps = {
  selectedDate: [
    dayjs.Dayjs,
    React.Dispatch<React.SetStateAction<dayjs.Dayjs>>
  ];
  userSelected: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
} | null;
