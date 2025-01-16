import React, { useState } from 'react'
import Style from './Profile.module.css'
import profile_img from '../../assets/images/profile_img.png'
import edit from '../../assets/svg/edit.svg'
import white_edit from '../../assets/svg/white_edit.svg'
import capture_two from '../../assets/svg/capture_two.svg'
import Input from '../../components/SignUp_input/Input'
import Button from '../../components/button/Button'
import password from '../../assets/svg/password.svg'
import Rep_PasswordReset from './rep_passwordReset/Rep_PasswordReset'



const Profile = () => {

    const [toggle, setToggle] = useState(0)
    const [passwordReset, setPasswordReset] = useState(0)
    const [editState, setEditState] = useState(false)
    const [imgUrl, SetImgUrl] = useState("")

    const toggleIndex = (index) => {
        setToggle(index)
    }

    const handleFile = (e) => {
        
        const file = e.target.files[0]
        // convert the file to a string and assign
        // and append the name of the file you are working with to a URL
        const url = URL.createObjectURL(file)
        SetImgUrl(url)
        setProfileUpdate(prev => ({ ...prev, imgURL: url }))
    }


    const [profileUpdate, setProfileUpdate] = useState({

        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        imgURL: ""
    })

    // const Details = (e)=>{
    //     const name = e.target.name
    //     const value = e.target.value

    //     setSignIn(
    //       (prev)=>({
    //         ...prev,
    //         [name]: value
    //       })
    //     )
    //   }

    //   const handleSubmit = (e) =>{
    //     e.preventDefault(e)
    //   }

    const editFun = () => {
        setEditState(!editState)
    }

    const HandleChange = (e) => {

        const value = e.target.value
        const name = e.target.name

        setProfileUpdate((prev) => ({
            ...prev,
            [name]: value,
        }))


    }

    const HandleSubmit = (e) => {
        e.preventDefault();
        console.log(profileUpdate);
        // Here you would typically send the data to your backend or perform other actions
    }


    return (
        <div id={Style.Profile_mainDiv}>
            <div id={Style.Profile_wrapperDiv}>
                <div id={Style.profile_detailsDiv}>

                    <div id={Style.Profile_firstline}>
                        <img src={profile_img} alt="" />

                        <p id={Style.nameText}>John Doe</p>
                        <p id={Style.positionText}>CC Admin</p>
                        <p id={Style.status}><div id={Style.statusDiv}></div> Online</p>
                    </div>

                    <div className={Style.log_InfoDiv}>

                        <p className={Style.loggedText}>Date of Creation</p>
                        <p className={Style.dateText}>24- Oct-2024</p>
                    </div>

                    <div className={Style.log_InfoDiv}>
                        <p className={Style.loggedText}>Last Login</p>
                        <p className={Style.dateText}>24- Oct-2024</p>
                    </div>

                    <div id={Style.lastlineDiv}>
                        <p className={Style.loggedText}>Status</p>
                        <p id={Style.activeText}>Active</p>
                    </div>
                </div>


                <div id={Style.settings_Div}>

                    <div id={Style.toggleDiv}>
                        <button onClick={() => toggleIndex(0)} className={toggle == 0 ? Style.activeToggle : Style.setting_button}>Account Settings</button>
                        <button onClick={() => toggleIndex(1)} className={toggle == 1 ? Style.activeToggle : Style.setting_button}>Customer Care Reps Assist</button>
                    </div>
                    {
                        toggle == 0 ?
                            <div id={Style.setting_wrapperDiv}>



                                <div id={Style.setting_img_EditDiv}>

                                    {imgUrl ? <img id={Style.profile_img} src={imgUrl} alt="" /> : <img id={Style.profile_img} src={profile_img} alt="" />}

                                    <div onClick={() => editFun()}>
                                        {editState ? <p id={Style.editText} style={{ color: "#FFFFFF", backgroundColor: "#0E093C" }}><img src={white_edit} alt="" /> Edit</p> : <p id={Style.editText} style={{ color: "#464646" }}><img src={edit} alt="" /> Edit</p>}
                                    </div>

                                </div>

                                {
                                    editState ?

                                        <div id={Style.imageUpload}>
                                            <label htmlFor="input_file"><img src={capture_two} alt="" />Change Cover</label>
                                            <input type="file" id="input_file" name="imgURL" onChange={handleFile} />
                                        </div> : ""
                                }

                                {
                                    !editState ?
                                        <div id={Style.infoDetails_Div}>

                                            <div id={Style.settings_informations}>
                                                <div>
                                                    <p className={Style.settings_headerText}>First Name</p>
                                                    <p className={Style.settings_detailsText}>John</p>
                                                </div>
                                                <div>
                                                    <p className={Style.settings_headerText}>Last Name</p>
                                                    <p className={Style.settings_detailsText}>Doe</p>
                                                </div>
                                            </div>

                                            <div id={Style.settings_informations}>
                                                <div >
                                                    <p className={Style.settings_headerText}>Email address</p>
                                                    <p className={Style.settings_detailsText}>Johndoe@gmail.com</p>
                                                </div>
                                                <div>
                                                    <p className={Style.settings_headerText}>Phone</p>
                                                    <p className={Style.settings_detailsText}>+2348576477736</p>
                                                </div>
                                            </div>
                                        </div> : ""
                                }

                                {
                                    editState ?

                                        <form action="" onSubmit={HandleSubmit}>

                                            <div id={Style.Input_mainDiv}>
                                                <div className={Style.InputDiv}>
                                                    <Input
                                                        type={"text"}
                                                        placeholder={"Type your first name"}
                                                        label={"First Name"}
                                                        name={"firstName"}
                                                        value={profileUpdate.firstName}
                                                        onChange={HandleChange} />
                                                    <Input
                                                        type="text"
                                                        placeholder="Enter your last name"
                                                        label="Last Name"
                                                        name="lastName"
                                                        value={profileUpdate.lastName}
                                                        onChange={HandleChange}
                                                    />
                                                </div>

                                                <div className={Style.InputDiv}>
                                                    <Input
                                                        type="email"
                                                        placeholder="Enter your email address"
                                                        label="Email Address"
                                                        name="email"
                                                        value={profileUpdate.email}
                                                        onChange={HandleChange}
                                                    />
                                                    
                                                    <Input
                                                        type="tel"
                                                        placeholder="Enter your phone number"
                                                        label="Phone"
                                                        name="phone"
                                                        value={profileUpdate.phone}
                                                        onChange={HandleChange}
                                                    />
                                                </div>
                                            </div>

                                            <Button
                                                type="submit"
                                                text="Save Profile"
                                                onClick={HandleSubmit}
                                            />
                                        </form> : ""
                                }


                            </div> : ""}

                    <div>
                        {passwordReset ? "" : <p id={Style.resetPasswordText} onClick={setPasswordReset}><img src={password} alt="" /> Reset Rep Password</p>}

                        {
                            passwordReset ?

                                <Rep_PasswordReset/>

                                : ""
                        }
                       
<div>
<p>Delete Account</p>
</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile