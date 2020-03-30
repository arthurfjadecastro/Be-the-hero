import services from "../services";
import { ResponseError } from "../Hooks";

const fetchIncidents = async (requestBody, page) => {
  const response = await services.getIncidents(page);

  if (response.status !== 200) {
    throw new ResponseError(`Erro ao obter os indcidentes: ${response.status}`);
  }

  return response;
};

export default fetchIncidents;
