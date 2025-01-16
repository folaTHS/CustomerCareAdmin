import React from 'react'
// import Style from '../total_Top_Agents/Total_Top_Agents.module.css'
import Header from '../../../../components/header/Header'
import person_img from '../../../../assets/images/person_img.png'
import Style from '../Top_Agents.module.css'


const Total_Top_Agents = () => {



    const arr = [
        {
            SN: "1",
            name: "John Doe",
            call: "200",
            message: "490",
            mail: "5660",
            tollcall: "480",
            action: "Review"
        },
        {
            SN: "2",
            name: "John Doe",
            call: "200",
            message: "490",
            mail: "5660",
            tollcall: "480",
            action: "Review"
        },
        {
            SN: "3",
            name: "John Doe",
            call: "200",
            message: "490",
            mail: "5660",
            tollcall: "480",
            action: "Review"
        },
        {
            SN: "4",
            name: "John Doe",
            call: "200",
            message: "490",
            mail: "5660",
            tollcall: "480",
            action: "Review"
        }
    ]
    return (
        <div id={Style.Top_Agents_mainDiv}>
            <Header
                headerText={"Top Performing Agents"}
                headerInfo={"Here’s an overview of top performing agents"} />

            <div id={Style.Top_Agents_wrapperDiv}>

                <div id={Style.Top_Agents_header_inputDiv}>
                    <div id={Style.Top_Agents_headerText}>Top Performing Agents</div>
                    {/* <InputField/> */}
                </div>
                <div id={Style.Top_Agents_TableWrapperDiv}>
                    <table>
                        <tr id={Style.headerTable}>
                            <th>S/N</th>
                            <th>Agent Name</th>
                            <th>In-app calls</th>
                            <th>In-app messages</th>
                            <th>Mails</th>
                            <th>Toll calls</th>
                            <th>Action</th>
                        </tr>

                        <tbody>
                            {
                                arr.map((user)=>{
                                    return <tr>
                                <td>{user.SN}</td>
                                <td><p><img src={person_img} alt="" />{user.name}</p></td>
                                <td className={Style.tableData}>{user.call}</td>
                                <td className={Style.tableData}>{user.message}</td>
                                <td className={Style.tableData}>{user.mail}</td>
                                <td className={Style.tableData}>{user.tollcall}</td>
                                <td><button style={{ backgroundColor: "#0E093C", border: "none", color: "#FFFFFF", fontSize: "0.7rem", width: "5.18rem", borderRadius: "8px", height: "1.37rem" }}>{user.action}</button></td>
                            </tr>
     
                                    
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Total_Top_Agents