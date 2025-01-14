import React, { useEffect, useState } from 'react'
import Style from './Dashboard.module.css'
import { BarChart, YAxis, XAxis, Bar, Tooltip, ResponsiveContainer } from 'recharts'
import Header from '../../components/header/Header'
import Total_Card from '../../components/total_Card/Total_Card'
import online from '../../assets/svg/online.svg'
import offline from '../../assets/svg/offline.svg'
import three_users from '../../assets/svg/three_users.svg'
import smiley from '../../assets/svg/gray_smiley.svg'
import call from '../../assets/svg/call.svg'
import arrow_down from '../../assets/svg/arrow_down.svg'
import amazing from '../../assets/svg/amazing.svg'
import good from '../../assets/svg/good.svg'
import neutral from '../../assets/svg/neutral.svg'
import sad from '../../assets/svg/sad.svg'
import issues from '../../assets/svg/Issues.svg'
import chat from '../../assets/svg/chat.svg'
import mail from '../../assets/svg/mail.svg'
import { Link } from 'react-router-dom'
import Button from '../../components/button/Button'
import Month_Picker from "../../components/month_picker/Month_Picker"
import { PopupContextHook } from '../../PopupContext'
import { getCCSummaryProvider } from '../api_detaills/provider/staff_provider'




const Customer_Support = () => {

    const { updateLoadingPopup, updateErrorText, updateErrorPopup } = PopupContextHook()

    const [summary, setSummary] = useState({
        totalQueries: 0,
        staff: 0,
        onlineStaff: 0,
        offlineStaff: 0
    })


    // Fetch summary data on component mount

    useEffect(() => {

        getCCSummaryProvider({

            updateCCSummary: (data) => {

                setSummary({
                    totalQueries: data.totalQueries || 0,
                    totalStaff: data.staff || 0,
                    onlineStaff: data.onlineStaff || 0,
                    offlineStaff: data.offlineStaff || 0
                });

            },
            updateErrorText,
            updateErrorPopup
        });
    }, []);

    const { totalQueries, totalStaff, onlineStaff, offlineStaff } = summary


    // Get the current month name
    const getCurrentMonth = () => {

        const currentMonthIndex = new Date().getMonth(); // Returns month index (0-11)
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];

        return months[currentMonthIndex];
    };


    const [selectedMonth, setSelectedMonth] = useState(getCurrentMonth());


    // const [monthsIndex, setMonthsIndex] = useState(true);
    const [ShowMonths, setShowMonths] = useState(true);



    const handleMonthSelect = (month) => {

        setSelectedMonth(month);
        setShowMonths(false)

        console.log("Selected Month: ", month); // Optional, logs the selected month
    };

    const toggle = () => {
        setShowMonths((prev) => !prev)
    }

    const stats_card5 = [
        {
            image1: three_users,
            price: totalStaff,
            text: "All Agents",
            to: "/allStaff",
            divText: "View Details"
        },
        {
            image1: issues,
            all: "All",
            price: totalQueries,
            text: "Queries",
            price2: "2k",
            price3: "2k",
            price4: "1k",
            image2: call,
            image3: mail,
            image4: chat,
            to: "/queries",
            divText: "View All"

        },
        {
            image1: online,
            price: onlineStaff,
            text: "Online",
            to: "",
            divText: "View All"
        },
        {
            image1: offline,
            price: offlineStaff,
            text: "Offline",
            to: "",
            divText: "View All"
        },
    ]

    const data = [
        {
            time: "2am",
            day: "Mon",
            Pv: "7"
        },
        {
            time: "4am",
            day: "Tue",
            Pv: "12"

        },
        {
            time: "6am",
            day: "Wed",
            Pv: "6"

        },
        {
            time: "10am",
            day: "Thur",
            Pv: "10"

        },
        {
            time: "12pm",
            day: "Fri",
            Pv: "12"

        },
        {
            time: "2pm",
            day: "Sat",
            Pv: "2"

        },
        {
            time: "4pm",
            day: "Sun",
            Pv: "9"

        }

    ]



    return (


        <div id={Style.Customer_Support_mainDiv}>

            <Header
                headerText={"Welcome, Admin"}
                headerInfo={"Here’s an overview of the customer care unit"} 
            />


            <div id={Style.Customer_Support_wrapperDiv}>

                <p id={Style.Customer_SupportText}>Customer Support Summary</p>

                <div id={Style.Customer_Support_mapDiv}>

                    {
                        stats_card5.map((obj, index) => {

                            return (
                                
                                <Total_Card
                                    key={index}
                                    text={obj.text}
                                    image1={obj.image1}
                                    divText={obj.divText}
                                    price={obj.price}
                                    to={obj.to}
                                    price2={obj.price2}
                                    price3={obj.price3}
                                    price4={obj.price4}
                                    image2={obj.image2}
                                    image3={obj.image3}
                                    image4={obj.image4}
                                    all={obj.all} />
                            )
                        })
                    }
                </div>

                <div id={Style.Customer_Support_rating_wrapperDiv}>

                    <div className={Style.Customer_Support_ratingDiv}>
                        <p className={Style.RatingText}>First Contact Resolution Rate</p>
                        <p className={Style.percentText}>70%</p>

                        <div id={Style.Customer_Support_progressDiv}>
                            <div id={Style.Customer_Support_progressBar}></div>
                            <img src={smiley} alt="" />
                        </div>
                        <p className={Style.Customer_Support_infoText}>70% more earning than last month, keep
                            watching to find out more</p>
                    </div>

                    <div className={Style.Customer_Support_ratingDiv}>
                        <p className={Style.RatingText}>Customer Satisfaction Rate</p>
                        <p className={Style.percentText}>70%</p>

                        <div id={Style.Customer_Support_progressDiv}>
                            <div id={Style.Customer_Support_progressBar}></div>
                            <img src={smiley} alt="" />
                        </div>
                        <p className={Style.Customer_Support_infoText}>70% more earning than last month, keep
                            watching to find out more</p>
                    </div>

                    <div className={Style.Customer_Support_ratingDiv}>
                        <p className={Style.RatingText}>Average Resolution Time</p>
                        <p className={Style.percentText}>70%</p>

                        <div id={Style.Customer_Support_progressDiv}>
                            <div id={Style.Customer_Support_progressBar}></div>
                            <img src={smiley} alt="" />
                        </div>
                        <p className={Style.Customer_Support_infoText}>70% more earning than last month, keep
                            watching to find out more</p>
                    </div>

                    <div className={Style.Customer_Support_ratingDiv}>
                        <p className={Style.RatingText}>Average Response Time</p>
                        <p className={Style.percentText}>70%</p>

                        <div id={Style.Customer_Support_progressDiv}>
                            <div id={Style.Customer_Support_progressBar}></div>
                            <img src={smiley} alt="" />
                        </div>
                        <p className={Style.Customer_Support_infoText}>70% more earning than last month, keep
                            watching to find out more</p>
                    </div>
                </div>

                <div id={Style.Customer_Support_performance_satisfactionDiv}>

                    <div id={Style.Customer_Support_performanceDiv}>

                        <div id={Style.performance_headerDiv}>
                            <p>Top Performing Agents</p>
                            <div id={Style.date_viewDiv}>
                                <p id={Style.dateText}>Week One October, 2024 <img src={arrow_down} alt="" /></p>
                                <Link to={"/TotalTopAgents"}>
                                    <Button text={"View All"} />
                                </Link>
                            </div>
                        </div>

                        <table>

                            <tbody>
                                <tr>
                                    <td>Days</td>
                                    <td className={Style.performing_agentText}>Calls</td>
                                    <td className={Style.performing_agentText}>Mails</td>
                                    <td className={Style.performing_agentText}>Msg</td>
                                </tr>
                                <tr>
                                    <td>John Doe</td>
                                    <td className={Style.performing_agentText}>46</td>
                                    <td className={Style.performing_agentText}>5</td>
                                    <td className={Style.performing_agentText}>5</td>
                                    <td><Link to={"/topAgent"}><Button text={"View Details"} /></Link></td>
                                </tr>
                                <tr>
                                    <td>John Doe</td>
                                    <td className={Style.performing_agentText}>22</td>
                                    <td className={Style.performing_agentText}>13</td>
                                    <td className={Style.performing_agentText}>5</td>
                                    <td><Button text={"View Details"} /></td>
                                </tr>
                                <tr>
                                    <td>John Doe</td>
                                    <td className={Style.performing_agentText}>45</td>
                                    <td className={Style.performing_agentText}>8</td>
                                    <td className={Style.performing_agentText}>5</td>
                                    <td><Button text={"View Details"} /></td>
                                </tr>
                                <tr>
                                    <td>John Doe</td>
                                    <td className={Style.performing_agentText}>34</td>
                                    <td className={Style.performing_agentText}>77</td>
                                    <td className={Style.performing_agentText}>5</td>
                                    <td><Button text={"View Details"} /></td>
                                </tr>
                                <tr>
                                    <td>John Doe</td>
                                    <td className={Style.performing_agentText}>89</td>
                                    <td className={Style.performing_agentText}>5</td>
                                    <td className={Style.performing_agentText}>5</td>
                                    <td><Button text={"View Details"} /></td>
                                </tr>
                                <tr>
                                    <td>John Doe</td>
                                    <td className={Style.performing_agentText}>33</td>
                                    <td className={Style.performing_agentText}>566</td>
                                    <td className={Style.performing_agentText}>5</td>
                                    <td><Button text={"View Details"} /></td>
                                </tr>
                                <tr>
                                    <td>John Doe</td>
                                    <td className={Style.performing_agentText}>21</td>
                                    <td className={Style.performing_agentText}>44</td>
                                    <td className={Style.performing_agentText}>5</td>
                                    <td><Button text={"View Details"} /></td>
                                </tr>
                            </tbody>

                        </table>

                    </div>


                    <div id={Style.CustomerCare_Progress_Wrapper}>

                        <div id={Style.CustomerCare_textDiv}>
                            <p>Average Customer Satisfaction Score</p>

                            <div id={Style.monthDiv} onClick={toggle}>{selectedMonth} <img src={arrow_down} alt="" /></div>


                            {
                                ShowMonths && (

                                    <div id={Style.month_pickerDiv}>

                                        <Month_Picker onMonthSelect={handleMonthSelect} defaultMonth={selectedMonth} />

                                    </div>
                                )
                            }
                        </div>

                        <div>

                            <div className={Style.Staff_progress}>
                                <div id={Style.Staff_details}>
                                    <div id={Style.imgDiv}>
                                        <img src={amazing} alt="" />
                                        <p>Amazing</p></div>
                                    <p>76.5%</p>
                                </div>
                                <div id={Style.progressDiv}></div>
                            </div>
                            <div className={Style.Staff_progress}>
                                <div id={Style.Staff_details}>
                                    <div id={Style.imgDiv}>
                                        <img src={good} alt="" />
                                        <p>Good</p></div>
                                    <p>76.5%</p>
                                </div>
                                <div id={Style.progressDiv}></div>
                            </div>
                            <div className={Style.Staff_progress}>
                                <div id={Style.Staff_details}>
                                    <div id={Style.imgDiv}>
                                        <img src={neutral} alt="" />
                                        <p>Neutral</p>
                                    </div>
                                    <p>76.5%</p>
                                </div>
                                <div id={Style.progressDiv}></div>
                            </div>

                            <div className={Style.Staff_progress}>
                                <div id={Style.Staff_details}>
                                    <div id={Style.imgDiv}>
                                        <img src={sad} alt="" />
                                        <p>Bad</p>
                                    </div>
                                    <p>76.5%</p>
                                </div>
                                <div id={Style.progressDiv}></div>
                            </div>

                        </div>

                    </div>
                </div>

                <div id={Style.Report_GraphDiv}>
                    <div id={Style.Report_WrapperDiv}>
                        <div id={Style.CustomerCare_textDiv}>
                            <p>Common Reports</p>
                            <div id={Style.monthDiv}>Month <img src={arrow_down} alt="" /></div>
                        </div>
                        <div className={Style.ReportsDiv}>
                            <p className={Style.ReportText}>Reports</p>
                            <p className={Style.ReportText}>Amount</p>
                        </div>
                        <div className={Style.ReportsDiv}>
                            <p className={Style.Report_Details}>Lorem ipsum dolor sit amet cctetur. Orci sapien et.</p>
                            <p className={Style.Report_Amounts}>12</p>
                        </div>

                        <div className={Style.ReportsDiv}>
                            <p className={Style.Report_Details}>Lorem ipsum dolor sit amet cctetur. Orci sapien et.</p>
                            <p className={Style.Report_Amounts}>12</p>
                        </div>

                        <div className={Style.ReportsDiv}>
                            <p className={Style.Report_Details}>Lorem ipsum dolor sit amet cctetur. Orci sapien et.</p>
                            <p className={Style.Report_Amounts}>12</p>
                        </div>

                        <div className={Style.ReportsDiv}>
                            <p className={Style.Report_Details}>Lorem ipsum dolor sit amet cctetur. Orci sapien et.</p>
                            <p className={Style.Report_Amounts}>12</p>
                        </div>

                        <div className={Style.ReportsDiv}>
                            <p className={Style.Report_Details}>Lorem ipsum dolor sit amet cctetur. Orci sapien et.</p>
                            <p className={Style.Report_Amounts}>12</p>
                        </div>
                    </div>
                    <div id={Style.Customer_Support_BarChartDiv}>

                        <p id={Style.BarChart_headerText}>Peak Time</p>

                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart width={150} height={40} data={data} margin={{
                                top: 20,
                                right: 0,
                                left: -40,
                                bottom: 30,
                            }}>


                                <XAxis dataKey="day"
                                    axisLine={false} tickLine={false} fontSize={"0.8rem"}
                                />
                                <YAxis
                                    axisLine={false} tickLine={false} fontSize={"0.7rem"}
                                />
                                <Tooltip />
                                <Bar dataKey="Pv" fill="#332D5B" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customer_Support
