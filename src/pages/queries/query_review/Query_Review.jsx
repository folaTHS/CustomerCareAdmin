import React from 'react'
import Style from '../query_review/Query_Review.module.css'
import person from '../../../assets/images/Person1.png'
import ccImg from '../../../assets/images/ccImg.png'
import Header from '../../../components/header/Header'
import Input from '../../../components/SignUp_input/Input'
import Button from '../../../components/button/Button'
import Staff_Card from '../../staff/all_staff/component/Staff_Card'
import ReactCalendarHeatmap from 'react-calendar-heatmap'



const Query_Review = () => {

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
        new Date(today.getFullYear(), today.getMonth() - 25, today.getDate()),
        today
    ).map((date) => ({
        date: date.toISOString().split('T')[0],
        count: Math.floor(Math.random() * 4),
    }));


    const user_card = [
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online"
        },
    ]

    return (
        <div id={Style.Query_Review_mainDiv}>

            <Header
                headerText={"Review"}
                headerInfo={"let's get rolling"} />

            <div id={Style.Query_Review_wrapperDiv}>

                <p id={Style.queryText}>Query Details</p>
                <div id={Style.Query_Review_mapDiv}>
                    <p className={Style.Query_Review_headerText}>User</p>
                    {
                        user_card.map((obj) => {

                            return (
                                <Staff_Card
                                    img={obj.img}
                                    name={obj.name}
                                    position={obj.position}
                                    status={obj.status} />
                            )
                        })
                    }
                </div>

                <p className={Style.Query_Review_headerText}>Query</p>

                <div id={Style.Query_Review_table_wrapperDiv}>
                    <table>
                        <tr id={Style.headerTable}>
                            <th>Ticket ID</th>
                            <th>Query Category</th>
                            <th>Query</th>
                            <th>Attachment</th>
                            <th>Action</th>
                        </tr>

                        <tbody>
                            <tr>
                                <td className={Style.Query_Review_headerText}>WH457IP</td>
                                <td className={Style.Query_Review_headerText}>User Dispute</td>
                                <td>
                                    <div id={Style.Query_td}>
                                        Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate

                                        Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate

                                        Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate

                                        Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate

                                        Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate

                                        Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate
                                    </div>

                                </td>
                                <td className={Style.Query_Review_headerText}>Nil</td>

                                <td>
                                    <div id={Style.Query_Review_td_button}>
                                        {/* <button>Reviewed</button> */}
                                        <button>Escalate</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div id={Style.resolution_customerDetails_Div}>
                    <div id={Style.resolution_mainDiv}>
                        <p id={Style.resolutionText}>Resolution</p>

                        <p id={Style.formText}>Fill details to continue</p>

                        <div id={Style.Query_Review_formDiv}>

                            <form action="">
                                <div id={Style.inputDiv}>
                                    <Input
                                        type={"text"}
                                        placeholder={"Type customer email"}
                                        label={"Customer Email"} />


                                    <div id={Style.textareaDiv}>

                                        <textarea name="" id={Style.textarea} placeholder="Type your resolution"></textarea>

                                        <label id={Style.label}>Resolution</label>
                                    </div>

                                    <Button text={"Send Resolution"} />
                                </div>
                            </form>
                        </div>
                    </div>


                    <div id={Style.customerDetails_Div}>
                        <p id={Style.onboardedText}>Date Onboarded : 9 Oct 2024</p>

                        <div id={Style.img_infoDiv}>
                            <img id={Style.customerCare_img} src={ccImg} alt="" />
                            <p id={Style.name}>John Doe</p>
                            <p className={Style.position}>Customer care representative</p>
                            <p id={Style.statusDiv}><div id={Style.status}></div>Online</p>



                        </div>

                        <div id={Style.CC_personalinfo}>
                            <div className={Style.date_email_Info}>
                                <p className={Style.details_Header}>Email:</p>
                                <p className={Style.detailsText}>johndoe@gmail.com</p>
                            </div>
                            <div className={Style.date_email_Info}>
                                <p className={Style.details_Header}>Phone:</p>
                                <p className={Style.detailsText}>+2348167366645</p>
                            </div>
                        </div>

                        <p id={Style.performanceText}>Performance</p>

                        <ReactCalendarHeatmap

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
                            showWeekdayLabels
                   
                        />

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Query_Review