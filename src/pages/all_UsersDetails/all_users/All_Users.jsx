import React, { useEffect, useState } from 'react'
import Style from '../all_users/All_Users.module.css'
import Staff_Card from '../../staff/all_staff/component/Staff_Card'
import search from '../../../assets/svg/Search.svg'
import blue from '../../../assets/svg/blue.svg'
import gold from '../../../assets/svg/gold.svg'
import black from '../../../assets/svg/black.svg'
import InputField from '../../../components/input/InputField'
import Header from '../../../components/header/Header'
import { Link } from 'react-router-dom'
import { PopupContextHook } from '../../../PopupContext'
import { getAllUsersProvider } from '../../api_detaills/provider/user_provider'




const All_Users = () => {

    const { updateLoadingPopup, updateErrorText, updateErrorPopup } = PopupContextHook();

    const [toggleIndex, setToggleIndex] = useState(0)


    const transactionToggle = (index) => {

        setToggleIndex(index)

    }
    // State to store user data

    const [users, setUsers] = useState({
        allUsers: [],
        subscribedUsers: [],
        unsubscribedUsers: []
       
    })

    // Fetch user data on component mount

    useEffect(() => {
        getAllUsersProvider({
            updateUsers: (data) => {
                setUsers({
                    allUsers: data.allUsers || [],
                    subscribedUsers: data.subscribedUsers || [],
                    unsubscribedUsers: data.unsubscribedUsers || []
                });
               
            },
            updateLoadingPopup,
            updateErrorText,
            updateErrorPopup
        });
    }, []);




    // Destructure user arrays for easier access

    const {allUsers_arr, subscribedUsers_arr, unsubscribedUsers_arr} = users




    return (
        <div id={Style.All_Users_mainDiv}>
            <Header
                headerText={"All Users"}
                headerInfo={"Here’s an information on all Users"} />

            <div id={Style.All_Users_wrapperDiv}>

                <div id={Style.button_Div}>

                    <Link to={"/suspendedAccounts"}>
                        <button id={Style.accounts_btn}>Suspended Accounts</button>

                    </Link>
                </div>

                <div id={Style.All_Users_toggle_dateDiv}>
                    <div id={Style.All_Users_toggleDiv}>
                        <button onClick={() => transactionToggle(0)} className={toggleIndex == 0 ? Style.toggleDiv_buttonActive : Style.All_Users_listDiv_button}>All</button>
                        <button onClick={() => transactionToggle(1)} className={toggleIndex == 1 ? Style.toggleDiv_buttonActive : Style.All_Users_listDiv_button}>Subscribed</button>
                        <button onClick={() => transactionToggle(2)} className={toggleIndex == 2 ? Style.toggleDiv_buttonActive : Style.All_Users_listDiv_button}>Unsubscribed</button>
                        {/* <button onClick={() => transactionToggle(3)} className={toggleIndex == 3 ? Style.toggleDiv_buttonActive : Style.All_Users_listDiv_button}>Not-Subscribed</button> */}
                    </div>

                    <div id={Style.searchDiv}>
                        <img src={search} alt="" />
                        <InputField
                            placeholder={"A-Z"} />
                    </div>

                </div>

                <div id={Style.All_Users_Card}>

                    {/* Render all users */}

                    {toggleIndex == 0 &&
                        users.allUsers.map((object, index) => {

                            let verify = object.subscription_type == "blue" ? blue
                                : object.subscription_type == "gold" ? gold
                                    : object.subscription_type == "black" ? black
                                        : ""

                            return (
                                < Staff_Card
                                    key={index} // Add a unique key prop
                                    img={object.profile_picture}
                                    verified={verify}
                                    status={object.status}
                                    name={object.username}
                                    position={object.country}
                                    to={`/userDetails/${object.phone}`}
                                    />
                            )

                        })
                    }

                    {/* Render subscribed users */}
                    {
                        toggleIndex == 1 &&
                        
                        users.subscribedUsers.map((object, index) => {

                            let verify = object.subscription_type == "blue" ? blue
                                : object.subscription_type == "gold" ? gold
                                    : object.subscription_type == "black" ? black : ""


                            return (
                                <Staff_Card
                                    key={index} // Add a unique key prop
                                    img={object.profile_picture}
                                    verified={verify}
                                    status={object.status}
                                    name={object.username}
                                    position={object.country}
                                    to={`/userDetails/${object.phone}`}
                                     />
                            )
                        })
                    }

                    {/* Render unsubscribed users */}
                    {
                        toggleIndex == 2 &&

                        users.unsubscribedUsers.map((object, index) => {

                            return (

                                <Staff_Card
                                    key={index} // Add a unique key prop
                                    img={object.profile_picture}
                                    status={object.status}
                                    name={object.username}
                                    position={object.country}
                                    to={`/userDetails/${object.phone}`}
                                    />
                            )

                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default All_Users