import { useState } from "react";

export const useForm = (initialValues = {}, url) => {
  const [values, setValues] = useState(initialValues);
  const [fetchSuccess, setSuccess] = useState(false);
  const [fetchError, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async event => {
    if (event) event.preventDefault();
    if (url) {
      setLoading(true);
      await fetch(url, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(res => {
          console.log("SUCCESS", res);
          setSuccess(true);
        })
        .catch(err => {
          console.log("ERROR:", err);
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        });
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
    fetchState: {
      fetchSuccess,
      fetchError,
      loading
    }
  };
};
