import { addStaffService, getAllStaffService, getCCSummaryService, getStaffDetailsService, suspendStaffService } from "../services/staff_services";



export const addStaffProvider = async (body, updateLoadingPopup, updateErrorPopup, updateErrorText, updateSignUpPopup) => {

    updateLoadingPopup(true);

    try {

        let response = await addStaffService(body);

        if (response.status === 200 || response.status === 201) {

            updateLoadingPopup(false);

            updateSignUpPopup(true)

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

        updateErrorText(err.response.data.responseMessage || "Staff Adding failed");

        updateErrorPopup(true);

        setTimeout(() => {
            updateErrorPopup(false);
        }, 2000);
    }

}


export const getAllStaffProvider = async ({ updateAllStaff, updateLoadingPopup, updateErrorText, updateErrorPopup }) => {

    updateLoadingPopup(true);

    try {

        let response = await getAllStaffService()

        if (response.status == 200 || response.status == 201) {

            updateLoadingPopup(false);

            updateAllStaff(response.data["responseBody"]);

        } else {
            updateLoadingPopup(false);

            updateErrorText(response.data["responseMessage"]);

            updateErrorPopup(true)

            setTimeout(() => {
                updateErrorPopup(false)
            }, 2000)
        }



    } catch (err) {
        updateErrorText(err.response.data.responseMessage || "Error fetching Staff");

        updateErrorPopup(true)

        setTimeout(() => {
            updateErrorPopup(false)
        }, 2000)
    }
}


export const getStaffDetailsProvider = async ({ updateStaffDetails, url, updateErrorText, updateErrorPopup }) => {

    try {

        let response = await getStaffDetailsService(url)

        if (response.status == 200 || response.status == 201) {

            updateStaffDetails(response.data["responseBody"]);


        } else {

            updateErrorText(response.data["responseMessage"]);

            updateErrorPopup(true)

            setTimeout(() => {
                updateErrorPopup(false)
            }, 2000)
        }



    } catch (err) {

        updateErrorText(err.response.data.responseMessage || "Error fetching staff Details");

        updateErrorPopup(true)

        setTimeout(() => {
            updateErrorPopup(false)
        }, 2000)
    }
}

export const getCCSummaryProvider = async ({ updateCCSummary, updateErrorText, updateErrorPopup }) => {


    try {

        let response = await getCCSummaryService()

        if (response.status == 200 || response.status == 201) {

            updateCCSummary(response.data["responseBody"]);


        } else {

            updateErrorText(response.data["responseMessage"]);

            updateErrorPopup(true)

            setTimeout(() => {
                updateErrorPopup(false)
            }, 2000)
        }



    } catch (err) {

        updateErrorText(err.response ? err.response.data.responseMessage : "Error fetching staff summary");

        updateErrorPopup(true)

        setTimeout(() => {
            updateErrorPopup(false)
        }, 2000)
    }

}


export const suspendStaffProvider = async (body, updateSuspendStaff, updateLoadingPopup, updateErrorPopup, updateErrorText, updateSuspendStaffSuccess) => {

    try {

        updateLoadingPopup(true);

        const response = await suspendStaffService(body);


        if (response.status == 200 || response.status == 201) {

            updateLoadingPopup(false);

            updateSuspendStaff(false)

            updateSuspendStaffSuccess(true)


        } else {

            updateErrorText(response.data["responseMessage"]);

            console.log("Error :", err);

            updateErrorPopup(true)
            setTimeout(() => {
                updateErrorPopup(false)
            }, 2000)

        }

    } catch (err) {

        updateLoadingPopup(false)

        updateErrorText(err.response.data.responseMessage || 'An Error occurred');

        updateErrorPopup(true)
        
        setTimeout(() => {
            updateErrorPopup(false)
        }, 2000)

    }

}