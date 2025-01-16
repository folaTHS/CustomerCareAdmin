import React, { useEffect, useState } from 'react'
import Style from './Staff_Details.module.css'
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import Header from '../../../components/header/Header'
import arrow_down from '../../../assets/svg/arrow_down-dark.svg'
import rise from '../../../assets/svg/rise.svg'
import users from '../../../assets/svg/users.svg'
import './Staff_Details.css'
import Stats_Card from '../../../components/stats_card/Stats_Card';
import { PopupContextHook } from '../../../PopupContext';
import { useParams } from 'react-router-dom';
import { getStaffDetailsProvider } from '../../api_detaills/provider/staff_provider';




const Staff_Details = () => {

    let { caEmail } = useParams()


    const { updateErrorText, updateErrorPopup, updateSuspendStaff, updateSuspendState } = PopupContextHook()


 



    const [staffDetails, setStaffDetails] = useState([]);


    useEffect(() => {

        let url = caEmail


        getStaffDetailsProvider({

            updateStaffDetails: (data) => {

                setStaffDetails(data)


            },
            url,
            updateErrorText,
            updateErrorPopup
        })

    }, [])

   const suspend = () => {

        updateSuspendState({
            email: caEmail,
            details: staffDetails
        })
        updateSuspendStaff(true)
    }


    const stats_card_2 = [
        {
            img: rise,
            figure: "200k",
            text: "Bet Placed",
            to: "/placebet"

        },
        {
            img: users,
            figure: "2m",
            text: "All Users",
            to: "/placebet"
        },

    ]


    const today = new Date();

    const getRange = (startDate, endDate) => {

        const date = new Date(startDate.getTime());
        const dates = [];

        while (date <= endDate) {
            dates.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }
        return dates;
    };

    const randomValues = getRange(
        new Date(today.getFullYear(), today.getMonth() - 3, today.getDate()),
        today
    ).map((date) => ({
        date: date.toISOString().split('T')[0],
        count: Math.floor(Math.random() * 4),
    }));


    // function getDate() {
    //     const today = new Date();
    //     const month = today.getMonth() + 1;
    //     const year = today.getFullYear();
    //     const date = today.getDate();
    //     return `${month}/${date}/${year}`;
    //   }



    return (

        <div id={Style.Staff_Details_mainDiv}>

            <Header
                headerText={"All Staff"}
                headerInfo={"Here’s an overview of all Staff"} />

            <div id={Style.Staff_Details_wrapperDiv}>

                <p id={Style.Staff_headerText}>Staff Detail</p>

                <div id={Style.Staff_Details_tableDiv}>

                    <table>

                        <thead>
                            <tr id={Style.headerTable}>
                                <th>Photo</th>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Country</th>
                                <th>Bank Detail</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>

                            {
                                staffDetails.map((obj, index) => {

                                    const action = obj.status == "active" ? "Suspend Action" : "Unsuspend"

                                    return (

                                        <tr key={index}>

                                            <td><img src={obj.photo} alt="" /></td>
                                            <td>{obj.fullname}</td>
                                            <td>{obj.email}</td>
                                            <td>{obj.phone_number}</td>
                                            <td>{obj.country}</td>
                                            <td>
                                                <div id={Style.BankDetails_Div}>
                                                    <div>
                                                        <p>Bank</p>
                                                        <p className={Style.BankDetails_BoldText}>Access Bank</p>
                                                    </div>
                                                    <div>
                                                        <p>Account Number</p>
                                                        <p className={Style.BankDetails_BoldText}>0123456789</p>
                                                    </div><div>
                                                        <p>Account Name</p>
                                                        <p className={Style.BankDetails_BoldText}>John Doe</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div id={Style.statusText}>Online</div>
                                            </td>

                                            <td>
                                                <button onClick={suspend} style={{
                                                    backgroundColor:
                                                        action == "Suspend Action" ? "#ED2F2F" : "#003E79"
                                                }}>
                                                    {action}
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>


                    </table>

                </div>

                <div id={Style.Staff_Details_hoursDaily_logDiv}>

                    <div id={Style.Staff_Details_Chart_StatsDiv}>

                        <div id={Style.Staff_Details_BarChart}>

                            {/* <div id={Style.Staff_Details_workingHours_TextDiv}> */}

                                <p>Working Hours</p>
                                {/* <button>View Details</button> */}
                            {/* </div> */}

                            <CalendarHeatmap

                                startDate={new Date('2024-01-01')}
                                endDate={new Date('2024-12-01')}
                                values={randomValues}
                                classForValue={(value) => {
                                    if (!value) {
                                        return 'color-empty';
                                    }
                                    return `color-scale-${value.count}`;
                                }}
                                tooltipDataAttrs={(value) => {
                                    return {
                                        'data-tip': value.date ? `${value.date}: ${value.count}` : 'No data',
                                    };
                                }}
                                showWeekdayLabels={true}
                                gutterSize={1}
                            // squareSize = {70}

                            />

                            <div className="legend">
                                <span className="CalendarText">Less</span>
                                <span className="color-box color-scale-0"></span>
                                <span className="color-box color-scale-1"></span>
                                <span className="color-box color-scale-2"></span>
                                <span className="color-box color-scale-3"></span>
                                <span className="color-box color-scale-4"></span>
                                <span className="CalendarText">More</span>
                            </div>

                        </div>

                        <div id={Style.Staff_Details_Card_wrapper}>
                            {
                                stats_card_2.map((obj, index) => {
                                    return (
                                        <Stats_Card
                                            key={index}
                                            img={obj.img}
                                            figure={obj.figure}
                                            text={obj.text}
                                            to={obj.to} />
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div id={Style.Staff_details_Daily_CallDiv}>

                        <div id={Style.Daily_Call_headerDiv}>
                            <p>Daily Call Log</p>
                            <p id={Style.dateText}>Week One October, 2024 <img src={arrow_down} alt="" /></p>
                        </div>


                        <table>

                            <tr>
                                <td>Days</td>
                                <td className={Style.Daily_CallText}>Calls</td>
                                <td className={Style.Daily_CallText}>Mails</td>
                                <td><button style={{ backgroundColor: "#075070", border: "none", color: "#FFFFFF", fontSize: "0.75rem", borderRadius: "0.5rem", height: "1.87rem", width: "5.12rem" }}>View Details</button></td>
                            </tr>
                            <tr>
                                <td>Monday</td>
                                <td className={Style.Daily_CallText}>46</td>
                                <td className={Style.Daily_CallText}>5</td>
                                <td><button style={{ backgroundColor: "#075070", border: "none", color: "#FFFFFF", fontSize: "0.75rem", borderRadius: "0.5rem", height: "1.87rem", width: "5.12rem" }}>View Details</button></td>
                            </tr>
                            <tr>
                                <td>Tuesday</td>
                                <td className={Style.Daily_CallText}>22</td>
                                <td className={Style.Daily_CallText}>13</td>
                                <td><button style={{ backgroundColor: "#075070", border: "none", color: "#FFFFFF", fontSize: "0.75rem", borderRadius: "0.5rem", height: "1.87rem", width: "5.12rem" }}>View Details</button></td>
                            </tr>
                            <tr>
                                <td>Wednesday</td>
                                <td className={Style.Daily_CallText}>45</td>
                                <td className={Style.Daily_CallText}>8</td>
                                <td><button style={{ backgroundColor: "#075070", border: "none", color: "#FFFFFF", fontSize: "0.75rem", borderRadius: "0.5rem", height: "1.87rem", width: "5.12rem" }}>View Details</button></td>
                            </tr>
                            <tr>
                                <td>Thursday</td>
                                <td className={Style.Daily_CallText}>34</td>
                                <td className={Style.Daily_CallText}>77</td>
                                <td><button style={{ backgroundColor: "#075070", border: "none", color: "#FFFFFF", fontSize: "0.75rem", borderRadius: "0.5rem", height: "1.87rem", width: "5.12rem" }}>View Details</button></td>
                            </tr>
                            <tr>
                                <td>Friday</td>
                                <td className={Style.Daily_CallText}>89</td>
                                <td className={Style.Daily_CallText}>5</td>
                                <td><button style={{ backgroundColor: "#075070", border: "none", color: "#FFFFFF", fontSize: "0.75rem", borderRadius: "0.5rem", height: "1.87rem", width: "5.12rem" }}>View Details</button></td>
                            </tr>
                            <tr>
                                <td>Saturday</td>
                                <td className={Style.Daily_CallText}>33</td>
                                <td className={Style.Daily_CallText}>566</td>
                                <td><button style={{ backgroundColor: "#075070", border: "none", color: "#FFFFFF", fontSize: "0.75rem", borderRadius: "0.5rem", height: "1.87rem", width: "5.12rem" }}>View Details</button></td>
                            </tr>
                            <tr>
                                <td>Sunday</td>
                                <td className={Style.Daily_CallText}>21</td>
                                <td className={Style.Daily_CallText}>44</td>
                                <td><button style={{ backgroundColor: "#075070", border: "none", color: "#FFFFFF", fontSize: "0.75rem", borderRadius: "0.5rem", height: "1.87rem", width: "5.12rem" }}>View Details</button></td>
                            </tr>
                        </table>


                    </div>
                </div>
            </div>



        </div>
    )
}

export default Staff_Details