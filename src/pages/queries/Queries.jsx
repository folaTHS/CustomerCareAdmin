import React, { useEffect, useState } from 'react'
import Style from './Queries.module.css'
import three_users from '../../assets/svg/three_users.svg'
import issues from '../../assets/svg/Issues.svg'
import resolve from '../../assets/svg/resolved.svg'
import Header from '../../components/header/Header'
import Total_Card from '../../components/total_Card/Total_Card'
import App_Pagination from '../../components/app_Pagination/App_Pagination'
import recording from '../../assets/svg/recording.svg'
import microphone from '../../assets/svg/microphone.svg'
import search from '../../assets/svg/Search.svg'
import InputField from '../../components/input/InputField'
import filter_img from '../../assets/svg/Complete_filter_img.svg'
import { Link } from 'react-router-dom'
import { PopupContextHook } from '../../PopupContext'
import { getQueriesProvider } from '../api_detaills/provider/query_provider'



const Queries = () => {

    const { updateLoadingPopup, updateErrorText, updateErrorPopup } = PopupContextHook();


    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(10)
    const [querySummary, setQuerySummary] = useState({
        totalQueries: 0,
        pendingQueries: 0,
        closedQueries: 0,
        allQueries: []
    })



    useEffect(() => {

        getQueriesProvider({

            updateQueries: (data) => {

                if (data) {

                    setQuerySummary({
                        totalQueries: data.totalQueries || 0,
                        pendingQueries: data.pendingQueries || 0,
                        closedQueries: data.closedQueries || 0,
                        allQueries: data.allQueries || []
                    });
                    console.log("data", data);


                } else {
                    console.log("err:", data);
                    console.error("Received undefined data from API");
                    // Optionally set some default values or show an error message
                }


            },
            updateErrorPopup,
            updateErrorText,
            

        });
        updateLoadingPopup(false);
        // updateErrorText("No data found")   
    }, []);

    console.log(querySummary)


    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = querySummary.allQueries.slice(indexOfFirstPost, indexOfLastPost);

    const total_count = querySummary.totalQueries
    const pending_count = querySummary.pendingQueries
    const closed_count = querySummary.closedQueries
    // const all_queries_arr = querySummary.allQueries



    const stats_card4 = [
        {
            image1: three_users,
            price: "200",
            text: "In-app Message Queries",
            to: "/messageQueries",
            divText: "View All"
        },
      
        {
            image1: resolve,
            price: "180",
            text: "In-app call Queries",
            to: "/callQueries",
            divText: "View All"
        },
        // {
        //     image1: resolve,
        //     price: "20",
        //     text: "Toll Calls Queries",
        //     to: "",
        //     divText: "View All"
        // },
    ]

    const stats_card3 = [
        {
            image1: three_users,
            price: pending_count,
            text: "In-Progress Queries",
            to: "/In-ProgressQueries",
            divText: "View All"
        },
        {
            image1: issues,
            price: closed_count,
            text: "Closed Queries",
            to: "/closedQueries",
            divText: "View All"
        },
        {
            image1: resolve,
            price: "180",
            text: "Escalated Queries",
            to: "/escalatedQueries",
            divText: "View All"
        }
    ]


    const paginate = (pageNumber) => setCurrentPage(pageNumber)




    return (
        <div id={Style.Reports_mainDiv}>
            
            <Header
                headerText={"Welcome, Admin"}
                headerInfo={"Here’s an overview of White House"} />

            <div id={Style.Reports_WrapperDiv}>
                <p className={Style.ReportsText}>Queries Summary</p>

                <div className={Style.Reports_mapDiv}>
                    {
                        stats_card4.map((obj, index) => {

                            return (

                                <Total_Card
                                    key={index}
                                    text={obj.text}
                                    image1={obj.image1}
                                    divText={obj.divText}
                                    price={obj.price}
                                    to={obj.to}

                                />
                            )
                        })
                    }
                </div>

                <div className={Style.Reports_mapDiv}>
                    {
                        stats_card3.map((obj, index) => {

                            return (

                                <Total_Card
                                    key={index}
                                    text={obj.text}
                                    image1={obj.image1}
                                    divText={obj.divText}
                                    price={obj.price}
                                    to={obj.to}

                                />
                            )
                        })
                    }

                </div>

                <div id={Style.Query_header_filterDiv}>

                    <p className={Style.ReportsText}>All Queries</p>

                    <div id={Style.Input_filterDiv}>

                        <div id={Style.searchDiv}>
                            <img src={search} alt="" />
                            <InputField />
                        </div>

                        <img src={filter_img} alt="" />
                    </div>

                </div>

                <div id={Style.Reports_Table_WrapperDiv}>
                    <table>
                        <thead>
                            <tr id={Style.headerTable}>
                                <th>S/N</th>
                                <th>Date</th>
                                <th>QueryType</th>
                                <th>Category</th>
                                <th>Username</th>
                                {/* <th>Headline</th> */}
                                <th>Query</th>
                                <th>Status</th>
                                <th>Action</th>

                            </tr>
                        </thead>


                        <tbody>
                            {
                                currentPosts.map((obj, index) => {
                                    
                                    const serialNumber = indexOfFirstPost + index + 1; // Calculate the correct serial number
                                    
                                    const color = obj.status === "pending" ? "#FC9E2F" : "#31C364"
                                    const BColor = obj.status === "pending" ? "#fc9e2f33" : "#31c36433"

                                    return (
                                        <tr id={Style.Personal_Info_tr} key={index}>

                                            <td>{serialNumber}</td>
                                            <td>{obj.date}</td>
                                            <td className={Style.tableText}>{obj.query_type_name}</td>
                                            <td className={Style.tableText}>{obj.category}</td>
                                            <td className={Style.tableText}>{obj.username}</td>
                                            {/* <td className={Style.tableText}>{obj.headline}</td> */}
                                            <td>
                                                <div className={Style.ReportDiv}>
                                                    <p className={Style.queryText}>{obj.query}</p>

                                                    {obj.file !== "" && (
                                                        <>
                                                            <p className={Style.Media_query}><img src={microphone} alt="" />{obj.file}</p>
                                                            <p className={Style.Media_query}><img src={recording} alt="" />Photo</p>
                                                        </>
                                                    )}
                                                </div>
                                            </td>
                                            <td>
                                                <div className={Style.statusText} style={{ backgroundColor: BColor, color: color }}>{obj.status}</div>
                                            </td>
                                            <td>
                                                <Link to={"/queryReview"}>
                                                    <button style={{ backgroundColor: "#0E093C", border: "none", color: "#FFFFFF", fontSize: "0.7rem", width: "5.18rem", cursor: "pointer", borderRadius: "0.5rem", height: "1.37rem" }}>
                                                        Review
                                                    </button>
                                                </Link>

                                            </td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>

                    </table>

                </div>

                <App_Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={querySummary.allQueries.length}
                    paginate={paginate}
                    currentPage={currentPage}
                />

              
            </div>
        </div>
    )
}

export default Queries
