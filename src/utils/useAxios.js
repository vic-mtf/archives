import axios from "axios";
import { makeUseAxios } from "axios-hooks";

const _CONFIG = {
  baseURL: import.meta.env.BASE_URL,
  responseType: import.meta.env.RESPONSE_TYPE,
  maxContentLength: import.meta.env.MAX_CONTENT_LENGTH,
  proxy: {
    protocol: import.meta.env.PROXY_PROTOCOL,
  },
};

const _AXIOS = axios.create(_CONFIG);
const useAxios = makeUseAxios(_AXIOS);

export default useAxios;
