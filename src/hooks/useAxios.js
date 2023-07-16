import { useState } from "react";
import axios from "axios";

const useAxios = (method, endpoint, data = null, options = {}) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const baseUrl = import.meta.env.VITE_BASE_URL;

  const fetchData = async () => {
    setLoading(true);
    try {
      const url = baseUrl + endpoint;
      const result = await axios[method.toLowerCase()](url, data, options);
      setResponse(result.data);
      setError(null);
    } catch (err) {
      setError(err);
      setResponse(null);
    } finally {
      setLoading(false);
    }
  };

  return { response, error, loading, fetchData };
};

export default useAxios;
