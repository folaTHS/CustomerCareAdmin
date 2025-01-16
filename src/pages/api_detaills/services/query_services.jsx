import { QuerySummary } from "../constant/url_path";
import { authAxios } from "./auth_services";



export const getQuerySummaryService = async () => {

    const response = await authAxios.get(QuerySummary);

    return response;
};