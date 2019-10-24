import React, { createContext, Dispatch } from "react";
import { useForm } from "../utils";
import { ILeagueId } from "../types";

const initialContext = {
  seasonValues: {
    values: {
      weeks_number: "0",
      start_date: "",
      disabled: false
    },
    initialValues: {
      weeks_number: "0",
      start_date: "",
      disabled: false
    },
    handleInputChange: (name: string) => (e: any) => {},
    handleDateChange: (name: string) => (date: Date) => {},
    handleSubmit: (e: any) => {},
    loading: false,
    handleSetValues: (newValues: any) => {},
    fetchResponse: {}
  }
};

export const seasonContext = createContext(initialContext);
const { Provider } = seasonContext;
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
