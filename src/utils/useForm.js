import { useState } from "react";

export const useForm = (initialValues = {}, url, callback) => {
  const [values, setValues] = useState(initialValues);

  const handleSubmit = event => {
    if (event) event.preventDefault();
    if (url) {
      fetch(url, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(res => console.log("SUCCESS", res))
        .catch(err => console.log("ERROR:", err));
    }
    callback();
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
    setValues
  };
};
