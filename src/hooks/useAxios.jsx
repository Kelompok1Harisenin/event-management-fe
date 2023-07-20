import axios from "axios";

const useAxios = async (method, endpoint, data = null, options = {}) => {
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const state = {
    statusCode: null,
    loading: true,
    error: null,
    headers: null,
    data: null,
  };

  const url = baseUrl + endpoint;
  try {
    const response = await axios[method.toLowerCase()](url, data, options);
    state.statusCode = response?.status;
    state.headers = response?.headers;
    state.data = response?.data;
  } catch (error) {
    state.statusCode = error.response?.status;
    state.error = error.response?.data?.message ?? error.response?.data;
  } finally {
    state.loading = false;
  }

  return state;
};

export default useAxios;
