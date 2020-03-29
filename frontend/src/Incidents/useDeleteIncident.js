import adminService from "../Network/AdminService/httpService";
import { useFiredRequest } from "../Hooks";

const useCreateOng = requestBody =>
  useFiredRequest(adminService.deleteIncident, requestBody);

export default useCreateOng;
