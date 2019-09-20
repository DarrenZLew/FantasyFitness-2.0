import { useState } from "react";
import { fetching } from "../../utils";

export const useForm = ({
  initialState = {},
  url,
  successCallback = () => {},
  errorCallback = () => {}
}) => {
  const [values, setValues] = useState(initialState);
  const [fetchResponse, setResponse] = useState({ status: null, value: null, message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async event => {
    if (event) event.preventDefault();
    if (url) {
      setLoading(true);
      const { status, value, message } = await fetching({ url, queryParams: values });
      if (status === "success") {
        console.log("STATUS, succcesscallback", successCallback);
        successCallback(value);
      }
      if (status === "error") {
        errorCallback();
      }
      setResponse({ status, value, message });
      setLoading(false);
    }
  };

  const handleChange = (name, id) => e => {
    e.persist();
    let newValue = e.target.value;
    if (e.target.type === "checkbox") {
      newValue = e.target.checked;
    } else if (e.target.type === "number" && (newValue < 0 || Number.isInteger(newValue))) {
      newValue = 0;
    }
    if (Array.isArray(values)) {
      const newValues = [...values];
      newValues[id][name] = newValue;
      setValues(newValues);
    } else {
      setValues(values => ({ ...values, [name]: newValue }));
    }
  };

  return {
    handleInputChange: (name, id = null) => handleChange(name, id),
    handleSubmit: fetchFn => handleSubmit(fetchFn),
    values,
    setValues,
    fetchResponse,
    loading
  };
};
