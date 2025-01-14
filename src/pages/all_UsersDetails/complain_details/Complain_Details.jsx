import React from 'react'
import Style from '../complain_details/Complain_Details.module.css'
import Header from '../../../components/header/Header'
import person from '../../../assets/images/Person1.png'
import Button from '../../../components/button/Button'
import smiley from '../../../assets/svg/gray_smiley.svg'

const Complain_Details = () => {

    return (
        <div id={Style.Complain_Details_mainDiv}>
            <Header
                headerText={"Complain Details"}
                headerInfo={"Here is a detailed information on the complain"} />

            <div id={Style.Complain_Details_wrapperDiv}>


                <div >
                    <p className={Style.Personal_Info_headerText}>Complain Details</p>
                    <div className={Style.Personal_Info_tableDiv}>

                        <table>
                            <tr id={Style.headerTable}>
                                <th>Date</th>
                                <th>Ticket ID</th>
                                <th>Query Category</th>
                                <th>Query</th>
                                <th>Attachments</th>
                                <th>Status</th>

                            </tr>
                            <tr id={Style.Personal_Info_tr}>
                                <td>8/7/2024</td>
                                <td id={Style.headlineText}>WH457IP</td>
                                <td id={Style.headlineText}>User Dispute</td>
                                <td>
                                    <div className={Style.ReportDiv}>
                                        <p>Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate</p>
                                        <p>Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate</p>
                                    </div>
                                </td>
                                <td id={Style.headlineText}>Nil</td>
                                <td>
                                    <div id={Style.statusText}>Reviewed</div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className={Style.line}></div>
                <div >
                    <p className={Style.Personal_Info_headerText}>Review Details</p>
                    <div id={Style.Complain_Details_tableDiv_two} className={Style.Personal_Info_tableDiv}>

                        <table>
                            <tr id={Style.headerTable}>
                                <th>Date</th>
                                <th>Reviewed By</th>
                                <th>Review</th>
                                <th>Status</th>
                            </tr>

                            <tr id={Style.Personal_Info_tr}>
                                <td>8/7/2024</td>
                                <td>
                                    <div id={Style.Staff_Card_WrapperDiv}>
                                        <img src={person} alt="" />
                                        <div id={Style.Staff_Card_textDiv}>
                                            <p className={Style.Staff_Card_nameText}>John Doe</p>
                                            <p className={Style.Staff_Card_careRep}>Customer Care Representative</p>
                                            <p className={Style.Staff_Card_onlineDiv}> <div className={Style.Staff_Card_online_signalDiv}></div>Online</p>

                                            <Button
                                                text={"View More Details"} />


                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className={Style.ReportDiv}>
                                        <p>Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate</p>
                                        <p>Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate</p>
                                    </div>
                                </td>
                                <td>
                                    <div id={Style.statusText}>Online</div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div className={Style.line}></div>
                <div>
                    <p className={Style.Personal_Info_headerText}>User Satisfaction</p>
                    <div id={Style.Revenue_total_EarningDiv}>
                        <div className={Style.Revenue_earningDiv}>

                            <p className={Style.earningText}>Prompt Response</p>
                            <p className={Style.priceText}>70%</p>

                            <div id={Style.Revenue_progressDiv}>
                                <div id={Style.Revenue_progressBar}></div>
                                <img src={smiley} alt="" />
                            </div>
                            <p className={Style.Revenue_infoText}>70% more earning than last month, keep
                                watching t find out more</p>
                        </div>

                        <div className={Style.Revenue_earningDiv}>

                            <p className={Style.earningText}>Customer Care Relation</p>
                            <p className={Style.priceText}>45%</p>

                            <div id={Style.Revenue_progressDiv}>
                                <div id={Style.Revenue_progressBar_two}></div>
                                <p id={Style.Revenue_percentText}>45%</p>
                            </div>
                            <p className={Style.Revenue_infoText}>70% more earning than last month, keep
                                watching t find out more</p>
                        </div>

                        <div className={Style.Revenue_earningDiv}>

                            <p className={Style.earningText}>Prompt Response</p>
                            <p className={Style.priceText}>70%</p>

                            <div id={Style.Revenue_progressDiv}>
                                <div id={Style.Revenue_progressBar}></div>
                                <img src={smiley} alt="" />
                            </div>
                            <p className={Style.Revenue_infoText}>70% more earning than last month, keep
                                watching t find out more</p>
                        </div>

                        <div className={Style.Revenue_earningDiv}>

                            <p className={Style.earningText}>Customer Care Relation</p>
                            <p className={Style.priceText}>45%</p>

                            <div id={Style.Revenue_progressDiv}>
                                <div id={Style.Revenue_progressBar_two}></div>
                                <p id={Style.Revenue_percentText}>45%</p>
                            </div>
                            <p className={Style.Revenue_infoText}>70% more earning than last month, keep
                                watching t find out more</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Complain_Details