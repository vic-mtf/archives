import { useCallback } from "react"
import useAxios from "./useAxios";
import { useSelector } from "react-redux";

export const useGetUrlData = () => {
    const token = useSelector(store => store.user.token);
    const getUrlData = useCallback(({ token: tk }) => ({
      url: `/api/stuff/validate`,
      headers: {
        Authorization: `Bearer ${ token || tk }`
      }
    }),[token]);
    return getUrlData;
};

const useGetData = ({ urlProps, onBeforeUpdate, onError }) => {
  const getUrlData = useGetUrlData();
  const [{ loading }, refetch] = useAxios(null, { manual: true });
  const onBefore = useCallback(data => 
      typeof onBeforeUpdate === 'function' ?  onBeforeUpdate(data) : data,
      [onBeforeUpdate]
  );
  const onBeforeError = useCallback(error => 
      typeof onError === 'function' ? onError(error) : error, 
      [onError]
  );
  const getData = useCallback((data) => 
      refetch(getUrlData({ ...(urlProps || data?.urlProps) }))
      .then(({ data }) => {
        onBefore(data);
      }).catch(onBeforeError), 
    [getUrlData, refetch, onBefore, urlProps, onBeforeError ]);

  return [loading, getData];
};

export default useGetData;