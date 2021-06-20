import dayjs from "dayjs";
import React from "react";
import {
  displayTypeType,
  monthViewType,
  eventType,
} from "../CalendarContainer/types";

export type RealDateConsumerProps = {
  selectedDateState: [
    dayjs.Dayjs,
    React.Dispatch<React.SetStateAction<dayjs.Dayjs>>
  ];
  userSelectedState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  displayTypeState: [
    displayTypeType,
    React.Dispatch<React.SetStateAction<displayTypeType>>
  ];
  monthViewState: [
    monthViewType,
    React.Dispatch<React.SetStateAction<monthViewType>>
  ];
  eventsState: [
    eventType[] | undefined,
    React.Dispatch<React.SetStateAction<eventType[] | undefined>>
  ];
};
export type DateConsumerProps = RealDateConsumerProps | null;

export const DateContext = React.createContext<DateConsumerProps>(null);
