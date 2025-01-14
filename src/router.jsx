import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from "./mainLayout/MainLayout"
import CustomerCare_AdminSignIn from "./pages/signIn/CustomerCare_AdminSignIn"
import PopupContext from './PopupContext'
import Profile from "./pages/profile/Profile"
import Dashboard from "./pages/dashboard/Dashboard"
import All_Staff from './pages/staff/all_staff/All_Staff'
import Staff_Details from "./pages/staff/staff_details/Staff_Details"
import Total_Top_Agents from "./pages/staff/top_agents/total_Top_Agents/Total_Top_Agents"
import Top_Agents from "./pages/staff/top_agents/Top_Agents"
import All_Users from "./pages/all_UsersDetails/all_users/All_Users"
import Personal_Info from "./pages/all_UsersDetails/personal_info/Personal_Info"
import Queries from "./pages/queries/Queries"
import Complain_Details from "./pages/all_UsersDetails/complain_details/Complain_Details"
import Query_Review from "./pages/queries/query_review/Query_Review"
import Mail_Queries from './pages/queries/queries_categories/Mail_Queries'
import Message_Queries from './pages/queries/queries_categories/Message_Queries'
import InApp_Calls from './pages/queries/queries_categories/calls_queries/InApp_Calls'
import Closed_Queries from './pages/queries/general_Queries/Closed_Queries'
import InProgress_Queries from "./pages/queries/general_Queries/InProgress_Queries"
import Escalated_Queries from './pages/queries/general_Queries/Escalated_Queries'
import Suspended_Accounts from './pages/all_UsersDetails/all_users/accounts/Suspended_Accounts'






const router = createBrowserRouter([

  {  
    path: "/",
    element: <PopupContext><MainLayout /></PopupContext>  ,
    children: [

        {
            index: true,
            element: <CustomerCare_AdminSignIn/>
        },
        {
            path: "/profile",
            element: <Profile/>
        },
        {
            path: "/Dashboard",
            element: <Dashboard/>
        },
        {
            path: "/allStaff",
            element: <All_Staff/>
        },
        {
            path: "/staffDetails/:caEmail",
            element: <Staff_Details/>
        },
        {
            path: "/totalTopAgents",
            element: <Total_Top_Agents/>
        },
        {
            path: "/topAgent",
            element: <Top_Agents/>
        },
        {
            path: "/allUsers",
            element: <All_Users/>
        },
        {
            path: "/userDetails/:phoneNumber",
            element: <Personal_Info/>
        },
 
        {
            path: "/suspendedAccounts",
            element: <Suspended_Accounts/>
        },
        {
            path: "/queries",
            element: <Queries/>
        },
        {
            path: "/mailQueries",
            element: <Mail_Queries/>
        },
        {
            path: "/messageQueries",
            element: <Message_Queries/>
        },
        {
            path: "/callQueries",
            element: <InApp_Calls/>
        },
        {
            path: "/closedQueries",
            element: <Closed_Queries/>
        },
        {
            path: "/In-ProgressQueries",
            element: <InProgress_Queries/>
        },
        {
            path: "/escalatedQueries",
            element: <Escalated_Queries/>
        },
        {
            path: "/queryReview",
            element: <Query_Review/>
        },
        {
            path: "/reportDetails",
            element: <Complain_Details/>
        }
    ]
}
])

export default router