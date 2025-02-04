import {
  addStaff,
  customerSpportSummary,
  getAllStaff,
  getStaffDetails,
  getTopPerformingAgents,
  postSuspendStaff,
} from "../constant/url_path";
import { authAxios } from "./auth_services";

export const addStaffService = async (body) => {
  const response = await authAxios.post(addStaff, body);

  return response;
};

export const getAllStaffService = async () => {
  const response = await authAxios.get(getAllStaff);

  return response;
};

export const getStaffDetailsService = async (url) => {
  const response = await authAxios.get(`${getStaffDetails}/${url}`);

  return response;
};

export const getCCSummaryService = async () => {
  const response = await authAxios.get(customerSpportSummary);

  return response;
};

export const suspendStaffService = async (body) => {
  const response = await authAxios.post(postSuspendStaff, body);

  console.log(response);

  return response;
};

export const getTopPerformingAgentsService = async () => {
  const response = await authAxios.get(getTopPerformingAgents);
  console.log(response);
  return response;
};
