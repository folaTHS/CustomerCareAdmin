import {
    login_url, postSuspendStaff

} from "../constant/url_path"
import axios from 'axios';
import { setEmail, setToken, getToken } from '../constant/local_storage';




export const login_service = async (body) => {


    //This sends the body as a request to the api

    const response = await axios.post(login_url, body);

    //This cheks if the Api Request was succesful
    //A success Response Status is either 200 or 201

    if (response.status == 200 || response.status == 201) {

        console.log('Success:', response.data);


        // Assuming the token is in response.data.token
        if (response.data["responseBody"]) {

            setToken(response.data["responseBody"]);

            // Store the email in local storage
            if (body.email) {
                setEmail(body.email);
            }
        } else {
            console.warn('Token not found in response');
        }
        console.log(response.data["responseBody"]);
    }
    //If it wasn't succesful run this !
    else {
        console.log("Login failed", response.data)

    }

    return response;
};

// Modify other service functions to include the token in the request header
export const authAxios = axios.create({

    headers: {
        Authorization: `Bearer ${getToken()}`
    }
});


// export const suspendStaffService = async (body) => {

//     const response = await axios.post(postSuspendStaff, body);

//     console.log(response);


//     return response;
// };



