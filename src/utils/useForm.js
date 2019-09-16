import { useState } from "react";

export const useForm = (initialValues = {}, callback) => {
  const [values, setValues] = useState(initialValues);

  const handleSubmit = fetchFn => event => {
    if (event) event.preventDefault();
    if (fetchFn) fetchFn();
    callback();
  };

  const handleChange = name => e => {
    e.persist();
    const newValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setValues(values => ({ ...values, [name]: newValue }));
  };

  return {
    handleInputChange: name => handleChange(name),
    handleSubmit: fetchFn => handleSubmit(fetchFn),
    values
  };
};
