import { getSuspendedAccounts, getUserDetails, getUsers, suspendUser } from "../constant/url_path"
import { authAxios } from "./auth_services";






export const getAllUsersService = async () => {

    const response = await authAxios.get(getUsers);

    return response;
};


export const getUserDetailsService = async (email, body) => {

    const response = await authAxios.get(`${getUserDetails}/${email}`, body);

    
    return response;
};


export const getSuspendedAccountsService = async () => {

    const response = await authAxios.get(getSuspendedAccounts);


    return response;
};


export const suspendUserService = async (body) => {

    const response = await authAxios.post(suspendUser, body);

    console.log(response);
    

    return response;

};