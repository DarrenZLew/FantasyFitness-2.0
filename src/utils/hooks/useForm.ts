import { useState, useEffect } from "react";
import { fetching, hasKey, convertToUTC } from "../../utils";
import { IFetchProps, IUseFormFetchResponse } from "../../types";

interface IInitialState {
  [key: string]: boolean | number | string | Date | IInitialState[];
}

interface IFormKeys {
  name: string;
  valueFormatter?: (data: any) => any | null;
}

interface IUseFormProps extends IFetchProps {
  initialState?: IInitialState[] | IInitialState;
  successCallback?: (data: any) => void;
  errorCallback?: () => void;
  extraBodyParams?: {
    [key: string]: boolean | number | string;
  };
  formPath?: string;
  onMount?: boolean;
  updateFormValues?: boolean;
  formKeys?: IFormKeys[];
}

export const useForm = ({
  initialState,
  url,
  successCallback,
  errorCallback,
  extraBodyParams = {},
  formPath = "",
  updateFormValues = false,
  onMount,
  formKeys
}: IUseFormProps) => {
  // Form input values
  const [values, setValues] = useState<IInitialState[] | IInitialState | any>(initialState);
  // Form initial values
  const [initialValues, setInitialValues] = useState<IInitialState[] | IInitialState | any>(
    initialState
  );
  // Response from on form create url
  const [onFormCreateValues, setOnFormCreateValues] = useState(null);
  // Response from submit form
  const [fetchResponse, setResponse] = useState<IUseFormFetchResponse>({
    status: "",
    value: null,
    message: ""
  });
  // Loading
  const [loading, setLoading] = useState(false);
  const [updateForm, setUpdateForm] = useState(updateFormValues);

  useEffect(() => {
    if (updateForm || onMount) {
      const fetchData = async () => {
        setLoading(true);
        const response = await fetching({ url });
        const { value } = response;
        setOnFormCreateValues(formPath ? { [formPath]: value } : value);

        let formValues = value;
        if (formKeys) {
          formValues = createFormValues(formValues, formKeys);
        }
        setInitialValues(formPath ? { [formPath]: formValues } : formValues);
        setValues(formPath ? { [formPath]: formValues } : formValues);
        setUpdateForm(false);
        setLoading(false);
      };
      fetchData();
    }
  }, [url, formPath, updateFormValues, formKeys, updateForm, onMount]);

  const createFormValues = (formValues: IInitialState, formKeys: IFormKeys[]) => {
    if (Array.isArray(formValues)) {
      return formValues.map(val => {
        return formKeys.reduce((acc, curr) => {
          return {
            ...acc,
            [curr.name]: curr.valueFormatter ? curr.valueFormatter(val) : val[curr.name]
          };
        }, {});
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();
    if (url) {
      setLoading(true);
      try {
        const { status, value, message } = await fetching({
          url,
          bodyParams: { ...values, ...extraBodyParams }
        });
        if (status === "success") {
          if (successCallback) successCallback(value);
        }
        if (status === "error") {
          if (errorCallback) errorCallback();
        }
        setResponse({ status, value, message });
        if (updateFormValues) {
          setUpdateForm(true);
        }
      } catch (err) {
        console.warn(err);
        setResponse({
          status: "error",
          value: err,
          message: "unknown error caught in useForm, check console"
        });
      } finally {
        setLoading(false);
      }
    }
  };

  const handleInputChange = (name: string, id?: number, path?: string) => (
    e:
      | React.FormEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
      | React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    e.persist();
    let target = e.target as HTMLInputElement;
    let newValue: any = target.value;
    if (target.type === "checkbox") {
      newValue = target.checked;
    } else if (target.type === "number" && (newValue < 0 || Number.isInteger(newValue))) {
      newValue = 0;
    }
    if (Array.isArray(values) || (typeof values === "object" && path)) {
      const newValues = path && hasKey(values, path) ? [...values[path]] : [...values];
      (newValues as any)[id][name] = newValue;
      setValues(path ? { [path]: newValues } : newValues);
    } else {
      setValues((values: any) => ({ ...values, [name]: newValue }));
    }
  };

  const handleDateChange = (name: string) => (date: Date) => {
    setValues((values: any) => ({ ...values, [name]: convertToUTC(date) }));
  };

  const handleSetValues = (newValues: any) => {
    setValues(newValues);
  };

  return {
    handleInputChange: (name: string, id?: number, path?: string) =>
      handleInputChange(name, id, path),
    handleDateChange: (name: string) => handleDateChange(name),
    handleSubmit,
    values,
    initialValues,
    setValues,
    handleSetValues,
    fetchResponse,
    loading,
    onFormCreateValues
  };
};
