import { createContext } from 'react';

export type datetime = {
  day: number,
  month: number,
  year: number
};

export type date = {
  datetime: datetime
};

export type cardInfo = {
  name: string,
  description: string,
  date: date
};

export const holidayDefault : cardInfo = {
  name: 'New Years Day',
  description: 'New Year’s Day is the first day of the year, or January 1, in the Gregorian calendar.',
  date: {
      datetime : {
          day: 1,
          month: 1,
          year: 2023,
      }
  }
};

export const holidayNull : cardInfo = {
  name: '',
  description: '',
  date: {
      datetime : {
          day: 0,
          month: 0,
          year: 0,
      }
  }
};

export interface DateContextType {
  dayNumber: number,
  monthNumber: number,
  holiday?: cardInfo,
  setDayNumber: (dayNumber: number) => void,
  setMonthNumber: (monthNumber: number) => void,
  setHoliday: (holiday: cardInfo) => void,
};

export const DateContext = createContext<DateContextType>({
  dayNumber: 0,
  monthNumber: 1,
  holiday: holidayDefault,
  setDayNumber: () => {},
  setMonthNumber: () => {},
  setHoliday: () => {},
});