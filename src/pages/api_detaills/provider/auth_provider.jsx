import {login_service} from "../services/auth_services"



export const login_provider = async (body, navigate, updateLoadingPopup, updateErrorText, updateErrorPopup) => {

    updateLoadingPopup(true);

    try {

        let response = await login_service(body);

        if (response.status === 200 || response.status === 201) {

            updateLoadingPopup(false);

            navigate("/dashboard");

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

        updateErrorText(err.response.data.responseMessage || "Login failed");

        updateErrorPopup(true);
        setTimeout(() => {
            updateErrorPopup(false);
        }, 2000);
    }
}



