import React, { createContext } from "react";
import dayjs from "dayjs";
import { useForm, diffDates, getToday } from "../utils";
import { ILeagueId, ISeasonProps } from "../types";

const initialContext = {
  seasonValues: {
    values: {
      weeks_number: 0,
      start_date: "",
      disabled: false,
      id: "",
      weeks: [{}]
    },
    initialValues: {
      weeks_number: 0,
      start_date: "",
      disabled: false,
      id: ""
    },
    handleInputChange: (name: string) => (e: any) => {},
    handleDateChange: (name: string) => (date: Date) => {},
    handleSubmit: (e: any) => {},
    loading: false,
    handleSetValues: (newValues: any) => {},
    fetchResponse: {},
    seasonDisabled: true,
    activeWeekNumber: 0,
    activeWeekRange: "",
    activeWeekId: 0
  }
};

export const seasonContext = createContext(initialContext);
const { Provider } = seasonContext;

const isDisabled = (values: ISeasonProps) => {
  return Object.keys(values).length === 0 || values.disabled;
};

const getActiveWeekId = (currIndex: number, values: ISeasonProps) => {
  if (values.weeks && !values.disabled) {
    const activeWeek = values.weeks.find(({ index }) => index === currIndex) || { id: 0 };
    return activeWeek.id;
  }
  return 0;
};

const getActiveWeekNumber = (startDate: Date | string) => {
  return diffDates(startDate) + 1;
};

const getActiveWeekRange = (startDate: Date | string) => {
  const currWeekNumber = getActiveWeekNumber(startDate);
  const firstDay = dayjs(startDate)
    .add(currWeekNumber - 1, "week")
    .format("M/DD/YYYY");
  const lastDay = dayjs(startDate)
    .add(currWeekNumber * 7 - 1, "day")
    .format("M/DD/YYYY");
  return `${firstDay} - ${lastDay}`;
};

export const SeasonProvider: React.FC<ILeagueId> = ({ children, leagueId }) => {
  const useFormProps = {
    url: `http://localhost:5000/leagues/${leagueId}/seasons`,
    initialState: {},
    updateFormValues: true
  };

  const {
    values,
    initialValues,
    handleInputChange,
    handleDateChange,
    handleSubmit,
    loading,
    handleSetValues,
    fetchResponse
  } = useForm({
    ...useFormProps
  });
  return (
    <Provider
      value={{
        seasonValues: {
          values,
          seasonDisabled: isDisabled(values),
          activeWeekNumber: getActiveWeekNumber(values.start_date),
          activeWeekId: getActiveWeekId(getActiveWeekNumber(values.start_date) - 1, values),
          activeWeekRange: getActiveWeekRange(values.start_date),
          initialValues,
          handleInputChange,
          handleDateChange,
          handleSubmit,
          loading,
          handleSetValues,
          fetchResponse
        }
      }}
    >
      {children}
    </Provider>
  );
};
