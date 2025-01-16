import React, { useEffect, useState } from 'react'
import Style from "./Suspend.module.css"
import { PopupContextHook } from '../../PopupContext'
import { suspendStaffProvider } from '../../pages/api_detaills/provider/staff_provider'



const Suspend_CC = () => {
    // Destructure context values for managing popup state
    const { suspendState, updateLoadingPopup, updateErrorText, updateErrorPopup, updateSuspendStaffSuccess,
        updateSuspendStaff } = PopupContextHook()

    // Function to handle cancellation of suspension
    const cancel = () => {
        updateSuspendStaff(false)
    }

    // Destructure email and details from suspendState
    const { email, details } = suspendState
    const [{ status }] = details

    // State to manage email input
    const [emailState, setEmail] = useState({
        email: email
    })

    // Function to handle suspension of staff
    const suspension = () => {
        let body = emailState
        suspendStaffProvider(body, updateSuspendStaff, updateLoadingPopup, updateErrorPopup, updateErrorText, updateSuspendStaffSuccess)
    }

    return (

        <div id={Style.Query_mainDiv}>
         
            <div id={Style.Query_wrapperDiv}>
              
                {
                    // Conditional rendering based on account status
                    status === "active" ?
                        <p>Suspend this account?</p> :
                        <p>Unsuspend this Account</p>
                }
                <div id={Style.btnDiv}>
                    <button onClick={suspension}>Yes</button>
                    <button onClick={cancel}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Suspend_CC