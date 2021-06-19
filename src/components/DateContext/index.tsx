import dayjs from "dayjs";
import React from "react";

export type DateConsumerProps = {
  selectedDateState: [
    dayjs.Dayjs,
    React.Dispatch<React.SetStateAction<dayjs.Dayjs>>
  ];
  userSelectedState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
} | null;

export const DateContext = React.createContext<DateConsumerProps>(null);
