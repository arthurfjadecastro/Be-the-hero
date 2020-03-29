import { useEffect, useState } from "react";

const useRequest = (requestFunction, requestBody) => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (requestBody === null) {
      setResult(null);
      setError(null);
      return;
    }

    requestFunction &&
      requestFunction(requestBody)
        .then(response => setResult(response))
        .catch(error => setError(error));

    return () => {
      setResult(null);
      setError(null);
    };
  }, [requestBody]);
  return [result, error];
};

export default useRequest;
