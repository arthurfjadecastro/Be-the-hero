import { useRequest } from "../Hooks";
import fetchIncidents from "./fetchIncidents";

const useIncidents = requestBody => {
  useRequest(fetchIncidents, requestBody);
};

export default useIncidents;
