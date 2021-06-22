/* eslint-disable no-underscore-dangle */
import dayjs from "dayjs";
import { eventType } from "./CalendarContainer/types";

export function normalizeDate(date: dayjs.Dayjs, toType: "day" | "hour") {
  if (toType === "day") {
    return date
      .set("hour", 0)
      .set("minute", 0)
      .set("second", 0)
      .set("milliseconds", 0);
  }
  return date.set("minute", 0).set("second", 0).set("milliseconds", 0);
}

export function filterEventsIn(
  events: eventType[],
  fromDate: dayjs.Dayjs,
  toType: "day" | "hour",
  normalize?: boolean
) {
  return events.filter((event) => {
    let _fromDate = fromDate;
    if (normalize) {
      _fromDate = normalizeDate(fromDate, toType);
    }
    try {
      const { startDate, endDate } = event;
      const _startDate = dayjs(startDate);
      const _endDate = dayjs(endDate);
      const _toDate = _fromDate.add(1, toType).subtract(1, "millisecond");
      const eventIsBefore: boolean =
        _startDate.isBefore(fromDate) && _endDate.isBefore(fromDate);
      const eventIsAfter: boolean =
        _startDate.isAfter(_toDate) && _endDate.isAfter(_toDate);
      return !(eventIsAfter || eventIsBefore);
    } catch {
      console.error("Invalid event: ", event);
    }
    return false;
  });
}

export function formatICS(events: eventType[]) {
  return events.map((event, index) => {
    const { summary } = event;
    return {
      id: index,
      title: summary,
      color: "#789789",
    };
  });
}
