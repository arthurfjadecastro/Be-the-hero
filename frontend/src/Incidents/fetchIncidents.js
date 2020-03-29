import adminService from "../Network/AdminService/httpService";
import { ResponseError } from "../Hooks";

const fetchIncidents = async () => {
  const response = await adminService.getIncidents();
  if (response.status !== 200) {
    throw new ResponseError(`Erro ao obter os indcidentes: ${response.status}`);
  }

  return response.data;
};

export default fetchIncidents;
