import { useRequest } from "../Hooks";
import fetchIncidents from "./fetchIncidents";

const useIncidents = requestBody => {
  return useRequest(fetchIncidents, requestBody);
};

export default useIncidents;
