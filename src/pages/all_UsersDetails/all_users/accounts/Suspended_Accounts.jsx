import React, { useEffect, useState } from 'react'
import Style from "../All_Users.module.css"
import InputField from '../../../../components/input/InputField'
import Header from '../../../../components/header/Header'
import blue from '../../../../assets/svg/blue.svg'
import gold from '../../../../assets/svg/gold.svg'
import black from '../../../../assets/svg/black.svg'
import search from '../../../../assets/svg/Search.svg'
import Accounts_Card from './accounts_card/Accounts_Card'
import { PopupContextHook } from '../../../../PopupContext'
import { getSuspendedAccountsProvider } from '../../../api_detaills/provider/user_provider'



const Suspended_Accounts = () => {

    const { updateSuspendedAccounts, updateLoadingPopup, updateErrorText, updateErrorPopup } = PopupContextHook()

    const [toggleIndex, setToggleIndex] = useState(0)

    const transactionToggle = (index) => {

        setToggleIndex(index)

    }

    const [suspendedAccounts, setSuspendedAccounts] = useState({

        allUsers: [],
        subscribedUsers: [],
        unsubscribedUsers: []
    })


    useEffect(() => {

        getSuspendedAccountsProvider({

            updateSuspendedAccounts: (data) => {

                setSuspendedAccounts({
                    allUsers: data.allUsers || [],
                    subscribedUsers: data.subscribedUsers || [],
                    unsubscribedUsers: data.unsubscribedUsers || []
                })
            },
            updateLoadingPopup,
            updateErrorText,
            updateErrorPopup
        })
    }, [])

    console.log(suspendedAccounts)

    const allUsers = suspendedAccounts.allUsers
    const subscribedUsers = suspendedAccounts.subscribedUsers
    const unsubscribedUsers = suspendedAccounts.unsubscribedUsers



    return (

        <div id={Style.All_Users_mainDiv}>
            <Header
                headerText={"Suspended Accounts"}
                headerInfo={"Here’s an information on all Suspended Accounts"} />

            <div id={Style.All_Users_wrapperDiv}>

                <div id={Style.button_Div}>
                    <button id={Style.accounts_btn}>Suspended Accounts</button>
                </div>

                <div id={Style.All_Users_toggle_dateDiv}>

                    <div id={Style.All_Users_toggleDiv}>
                        <button onClick={() => transactionToggle(0)} className={toggleIndex == 0 ? Style.toggleDiv_buttonActive : Style.All_Users_listDiv_button}>All</button>
                        <button onClick={() => transactionToggle(1)} className={toggleIndex == 1 ? Style.toggleDiv_buttonActive : Style.All_Users_listDiv_button}>Subscribed</button>
                        <button onClick={() => transactionToggle(2)} className={toggleIndex == 2 ? Style.toggleDiv_buttonActive : Style.All_Users_listDiv_button}>Unsubscribed</button>
                    </div>

                    <div id={Style.input_FilterDiv}>

                        <div id={Style.searchDiv}>

                            <img src={search} alt="" />

                            <InputField
                                placeholder={"A-Z"}
                            />
                        </div>

                    </div>

                </div>


                <div id={Style.All_Users_Card}>


                    {
                        toggleIndex == 0 &&


                        allUsers.map((object, index) => {

                            let statusColor = object.status === "Online" ? true : false

                            let verify = object.subscription_type == "blue" ? blue
                                : object.subscription_type == "gold" ? gold
                                    : object.subscription_type == "black" ? black
                                        : ""

                            return (
                                <Accounts_Card
                                    key={index}
                                    img={object.profile_picture}
                                    online={object.online}
                                    name={object.username}
                                    position={object.country}
                                    to={object.to}
                                    status={object.status}
                                    verified={verify}
                                    statusColor={statusColor} />
                            )
                        })

                    }

                    {

                        toggleIndex == 1 &&

                        subscribedUsers.map((object, index) => {

                            let statusColor = object.status === "Online" ? true : false

                            let verify = object.subscription_type == "blue" ? blue
                                : object.subscription_type == "gold" ? gold
                                    : object.subscription_type == "black" ? black
                                        : ""

                            return (
                                
                                <Accounts_Card
                                    key={index}
                                    img={object.profile_picture}
                                    online={object.online}
                                    name={object.username}
                                    position={object.country}
                                    to={object.to}
                                    status={object.status}
                                    verified={verify}
                                    statusColor={statusColor} />
                            )
                        })
                    }


                    {

                        toggleIndex == 2 &&

                        unsubscribedUsers.map((object, index) => {

                            let statusColor = object.status === "Online" ? true : false

                            let verify = object.subscription_type == "blue" ? blue
                                : object.subscription_type == "gold" ? gold
                                    : object.subscription_type == "black" ? black
                                        : ""

                            return (

                                <Accounts_Card
                                    key={index}
                                    img={object.profile_picture}
                                    online={object.online}
                                    name={object.username}
                                    position={object.country}
                                    to={object.to}
                                    status={object.status}
                                    verified={verify}
                                    statusColor={statusColor}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Suspended_Accounts