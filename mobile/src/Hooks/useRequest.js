import { useEffect, useState } from "react";
import { useDelayedEffect } from "../Hooks";

const useRequest = (requestFunction, requestBody) => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // useDelayedEffect(() => {
  //   setLoading(true);
  //   requestFunction &&
  //     requestFunction(requestBody, page)
  //       .then(response => {
  //         setTotal(response.headers["x-total-count"]);
  //         setResult(response.data);
  //         setLoading(false);
  //       })
  //       .catch(error => setError(error));

  //   setLoading(false);
  //   setPage(page + 1);
  // }, []);

  useEffect(() => {
    if (requestBody === null) {
      setResult(null);
      setError(null);
      setTotal(null);
      setLoading(false);
      return;
    }
    setLoading(true);
    requestFunction &&
      requestFunction(requestBody, page)
        .then(response => {
          setTotal(response.headers["x-total-count"]);
          setResult(response.data);
        })
        .catch(error => setError(error));
    setPage(page + 1);
    setLoading(false);
    return () => {
      setResult(null);
      setError(null);
      setTotal(null);
      setLoading(false);
    };
  }, [requestBody]);
  // console.log("page request");
  // console.log(page);

  return [result, error, total, page, loading];
};

export default useRequest;
