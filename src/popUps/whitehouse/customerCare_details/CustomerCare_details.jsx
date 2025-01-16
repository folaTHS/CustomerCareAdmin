import React from 'react'
import Style from '../customerCare_details/CustomerCare_details.module.css'



const CustomerCare_details = () => {
  return (
    <div id={Style.CustomerCare_details_mainDiv}>
        <div id={Style.CustomerCare_details_wrapperDiv}>
            <p>See details from the customer care unit</p>
            <div id={Style.btnDiv}>
                <button>Yes</button>
                <button> Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default CustomerCare_details