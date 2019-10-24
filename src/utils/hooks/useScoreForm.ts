import { useState, useEffect } from "react";
import { fetching, hasKey } from "../../utils";
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
  updateURL?: string;
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

export const useScoreForm = ({
  initialState,
  url,
  updateURL,
  successCallback,
  errorCallback,
  extraBodyParams = {},
  formPath = "",
  updateFormValues = false,
  onMount,
  formKeys
}: IUseFormProps) => {
  // Form values
  const [values, setValues] = useState<IInitialState[] | IInitialState | any>(initialState);
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

  const handleSubmit = async (data: any) => {
    if (updateURL) {
      console.log(data);
      //   setLoading(true);
      //   try {
      //     const { status, value, message } = await fetching({
      //       url: updateURL,
      //       bodyParams: { ...values, ...extraBodyParams }
      //     });
      //     if (status === "success") {
      //       if (successCallback) successCallback(value);
      //     }
      //     if (status === "error") {
      //       if (errorCallback) errorCallback();
      //     }
      //     setResponse({ status, value, message });
      //     if (updateFormValues) {
      //       setUpdateForm(true);
      //     }
      //   } catch (err) {
      //     console.warn(err);
      //     setResponse({
      //       status: "error",
      //       value: err,
      //       message: "unknown error caught in useForm, check console"
      //     });
      //   } finally {
      //     setLoading(false);
      //   }
    }
  };

  return {
    handleSubmit,
    values,
    setValues,
    fetchResponse,
    loading,
    onFormCreateValues
  };
};
