import { useState, useEffect } from "react";
import { fetching, hasKey } from "../../utils";
import { IFetchProps, IUseFormFetchResponse } from "../../types";

interface IInitialState {
  [key: string]: boolean | number | string | IInitialState[];
}

interface IFormKeys {
  name: string;
  pathFn?: (data: any) => any | null;
}

interface IUseFormProps extends IFetchProps {
  initialState?: IInitialState[] | IInitialState;
  successCallback?: (data: any) => void;
  errorCallback?: () => void;
  extraBodyParams?: {
    [key: string]: boolean | number | string;
  };
  onMountPath?: string;
  onMount?: boolean;
  formKeys?: IFormKeys[];
}

export const useForm = ({
  initialState,
  url,
  successCallback,
  errorCallback,
  extraBodyParams = {},
  onMountPath = "",
  onMount = false,
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

  useEffect(() => {
    if (onMount) {
      const fetchData = async () => {
        setLoading(true);
        const response = await fetching({ url });
        const { value } = response;
        setOnFormCreateValues(onMountPath ? { [onMountPath]: value } : value);

        let formValues = value;
        if (formKeys) {
          formValues = createFormValues(formValues, formKeys);
        }
        setValues(onMountPath ? { [onMountPath]: formValues } : formValues);

        setLoading(false);
      };
      fetchData();
    }
  }, [url, onMountPath, onMount, formKeys]);

  const createFormValues = (formValues: IInitialState, formKeys: IFormKeys[]) => {
    if (Array.isArray(formValues)) {
      return formValues.map(val => {
        return formKeys.reduce((acc, curr) => {
          return {
            ...acc,
            [curr.name]: curr.pathFn ? curr.pathFn(val) : val[curr.name]
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

  const handleChange = (name: string, id?: number, path?: string) => (
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
      console.log("handleChange", name);
      setValues(path ? { [path]: newValues } : newValues);
      console.log("handleChange", newValues);
    } else {
      setValues((values: any) => ({ ...values, [name]: newValue }));
    }
  };

  return {
    handleInputChange: (name: string, id?: number, path?: string) => handleChange(name, id, path),
    handleSubmit,
    values,
    setValues,
    fetchResponse,
    loading,
    onFormCreateValues
  };
};
