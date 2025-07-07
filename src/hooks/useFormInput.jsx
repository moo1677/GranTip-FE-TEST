import { useState, useEffect } from "react";

function useFormInput({
  initialValue = "",
  validate = () => true,
  errorMessage = "",
}) {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const onChange = (e) => setValue(e.target.value);
  const onFocus = () => setIsFocused(true);
  const onBlur = () => setIsFocused(false);
  useEffect(() => {
    if (value === "") {
      setError(""); // 아직 안 썼을 땐 에러 X
    } else if (!validate(value)) {
      setError(errorMessage);
    } else {
      setError("");
    }
  }, [value, validate, errorMessage]);
  return {
    value,
    onChange,
    onFocus,
    onBlur,
    error,
    isFocused,
    isValid: error === "",
    setValue,
  };
}

export default useFormInput;
