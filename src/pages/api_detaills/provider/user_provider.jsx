import { getAllUsersService, getSuspendedAccountsService, getUserDetailsService, 
    suspendUserService } from "../services/user_services";



export const getAllUsersProvider = async ({ updateUsers, updateLoadingPopup, updateErrorText, updateErrorPopup }) => {

    try {

        updateLoadingPopup(true);

        let response = await getAllUsersService()

        if (response.status == 200 || response.status == 201) {

            updateLoadingPopup(false);

            updateUsers(response.data["responseBody"]);

        } else {
            updateLoadingPopup(false);

            updateErrorText(response.data["responseMessage"]);

            updateErrorPopup(true)
            setTimeout(() => {
                updateErrorPopup(false)
            }, 2000)
        }



    } catch (err) {

        updateLoadingPopup(false);

        updateErrorText( err.response.data.responseMessage || "Failed to fetch Users");

        updateErrorPopup(true)
        setTimeout(() => {
            updateErrorPopup(false)
        }, 2000)
    }

}


export const getUserDetailsProvider = async ({ updateUserDetails, phone, updateErrorText, updateErrorPopup }) => {


    try {

        let response = await getUserDetailsService(phone)

        if (response.status == 200 || response.status == 201) {

            updateUserDetails(response.data["responseBody"])


        } else {

            updateErrorText(response.data["responseMessage"]);
            

            updateErrorPopup(true)
            setTimeout(() => {
                updateErrorPopup(false)
            }, 2000)

        }

    } catch (error) {

        updateErrorText( error.response.data.responseMessage || "Failed to fetch User Details");

        updateErrorPopup(true)

        setTimeout(() => {
            updateErrorPopup(false)
        }, 2000)

        console.log("Error :", error);

    }

}


export const getSuspendedAccountsProvider = async ({ updateSuspendedAccounts, updateLoadingPopup, updateErrorText, updateErrorPopup }) => {

    try {

        updateLoadingPopup(true);

        let response = await getSuspendedAccountsService()

        if (response.status == 200 || response.status == 201) {

            updateLoadingPopup(false);

            updateSuspendedAccounts(response.data["responseBody"]);

        }else {

            updateErrorText(response.data["responseMessage"]);
            
            updateErrorPopup(true)

            setTimeout(() => {

                updateErrorPopup(false)
            }, 2000)

        }


    } catch (err) {

        updateLoadingPopup(false)
        updateErrorText(err.response.data.responseMessage || "Error fetching Suspended users");

        updateErrorPopup(true)
        setTimeout(() => {
            updateErrorPopup(false)
        }, 2000)
    }
}

export const suspendUserProvider = async (body, updateLoadingPopup, updateSuspendSuccess, updateSuspendUserPopup, updateErrorPopup, updateErrorText) => {

    try {

        updateLoadingPopup(true);

        const response = await suspendUserService(body);

        console.log(response);
        

        if (response.status == 200 || response.status == 201) {

            updateLoadingPopup(false);

            updateSuspendUserPopup(false)

            updateSuspendSuccess(true)

        } else {

            updateLoadingPopup(false);

            updateErrorText(response.data["responseMessage"]);

            updateErrorPopup(true)
            setTimeout(() => {
                updateErrorPopup(false)
            }, 2000)

        }

    } catch (err) {

        updateLoadingPopup(false)

        updateErrorText(err.response ? err.response.data.responseMessage : 'An error occured');

        updateErrorPopup(true)
        setTimeout(() => {
            updateErrorPopup(false)
        }, 2000)

    }

}
