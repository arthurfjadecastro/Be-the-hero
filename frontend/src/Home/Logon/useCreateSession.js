import adminService from "../../Network/AdminService/httpService";
import { useFiredRequest } from "../../Hooks";

const useCreateSession = requestBody =>
  useFiredRequest(adminService.createSession, requestBody);

export default useCreateSession;
