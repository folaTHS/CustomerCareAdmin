import { getQuerySummaryService } from "../services/query_services";



export const getQueriesProvider = async ({ updateQueries, updateErrorPopup, updateErrorText }) => {

    try {

        let response = await getQuerySummaryService()

        if (response.status == 200 || response.status == 201) {

            updateQueries(response.data["responseBody"]);

        } else {
            updateErrorText(response.data["responseMessage"]);

            updateErrorPopup(true)

            setTimeout(() => {
                updateErrorPopup(false)
            }, 2000)
        }

    } catch (err) {

        updateErrorText(err.response ? err.response.data.responseMessage : "Error fetching users");

        updateErrorPopup(true)

        setTimeout(() => {
            updateErrorPopup(false)
        }, 2000)

    }

}

