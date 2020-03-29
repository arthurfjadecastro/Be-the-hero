import adminService from "../../Network/AdminService/httpService";
import { useFiredRequest } from "../../Hooks";

const useCreateOng = requestBody =>
  useFiredRequest(adminService.createIncident, requestBody);

export default useCreateOng;
