import dayjs from "dayjs";
import { RealDateConsumerProps } from "../DateContext";

export type updateTypeType = "previous" | "next" | "today";
type HeaderActionProps = {
  updateType: string;
  monthViewState: RealDateConsumerProps["monthViewState"];
  selectedDateState: RealDateConsumerProps["selectedDateState"];
};

const monthAction = ({
  updateType,
  monthViewState,
  selectedDateState,
}: HeaderActionProps) => {
  const [{ month, year }, setMonthViewContext] = monthViewState;
  const [, setSelectedDate] = selectedDateState;

  let updatedMonth = month;
  let updatedYear = year;
  let updatedDate = 1;
  const today = dayjs();
  // eslint-disable-next-line default-case
  switch (updateType) {
    case "previous":
      if (month === 1) {
        updatedMonth = 12;
        updatedYear -= 1;
      } else {
        updatedMonth -= 1;
      }
      break;
    case "next":
      if (month === 12) {
        updatedMonth = 1;
        updatedYear += 1;
      } else {
        updatedMonth += 1;
      }
      break;
    case "today":
      updatedMonth = today.month() + 1;
      updatedYear = today.year();
      updatedDate = today.date();
      break;
  }
  const newDate = dayjs(
    new Date(updatedYear, updatedMonth - 1, updatedDate, 0, 0, 0, 0)
  );
  setMonthViewContext({ year: updatedYear, month: updatedMonth });
  setSelectedDate(newDate);
};

const weekAction =
  (type: "day" | "week") =>
  ({ updateType, monthViewState, selectedDateState }: HeaderActionProps) => {
    const [selectedDate, setSelectedDate] = selectedDateState;
    const [, setMonthViewContext] = monthViewState;
    let newDate: dayjs.Dayjs;
    // eslint-disable-next-line default-case
    switch (updateType) {
      case "previous":
        newDate = selectedDate.add(-1, type);
        break;
      case "next":
        newDate = selectedDate.add(1, type);
        break;
      case "today":
        newDate = dayjs();
        break;
    }

    setMonthViewContext({ year: newDate!.year(), month: newDate!.month() + 1 });
    setSelectedDate(newDate!);
  };

const actions = {
  month: monthAction,
  week: weekAction("week"),
  day: weekAction("day"),
};

export default function updateDate(
  updateType: updateTypeType,
  CalendarStates: RealDateConsumerProps
) {
  const {
    monthViewState,
    selectedDateState,
    displayTypeState: [displayType],
  } = CalendarStates;
  actions[displayType]({ updateType, monthViewState, selectedDateState });
}
