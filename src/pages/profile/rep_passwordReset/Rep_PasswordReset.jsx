import React, { useState } from 'react'
import Style from './Rep_PasswordReset.module.css'
import Input from '../../../components/SignUp_input/Input'
import Button from '../../../components/button/Button'
import password from '../../../assets/svg/password.svg'
import { PopupContextHook } from '../../../PopupContext'


const Rep_PasswordReset = () => {

    const { updatePasswordResetPopup } = PopupContextHook()

    const success = () => {
        updatePasswordResetPopup(true)
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

        const { value, name, files } = e.target

        setProfileUpdate((prev) => ({
            ...prev,
            [name]: value,
            // [name]: name === "imgURL" ? URL.createObjectURL(file[0]) : value
        }))


    }

    const HandleSubmit = (e) => {
        e.preventDefault(e)
        console.log(profileUpdate);
    }


    return (

        <div id={Style.passwordResetDiv}>

            <form action="">

                <div id={Style.Input_mainDiv}>
                    <p className={Style.input_headerText}>Fill Rep details to generate Password</p>

                    <div className={Style.password_inputDiv}>
                        {/* <Input
                                type={"text"}
                                placeholder={"Type your first name"}
                                label={"Rep Full Name"}
                                name={"firstName"}
                                value={""}
                                onChange={HandleChange} /> */}

                        <Input
                            type={"email"}
                            placeholder={"johndoe@gmail.com "}
                            label={"Rep Email Address"}
                            name={"lastName"}
                            value={""}
                            onChange={HandleChange} />

                    </div>

                    <p className={Style.input_headerText}>Create Password</p>

                    <Input
                        type={"text"}
                        placeholder={"1324565DG"}
                        label={"password"}
                        name={"phone"}
                        value={""}
                        onChange={HandleChange}
                    />

                </div>

                <div id={Style.password_generationDiv}>Re-generate Password</div>

                <div id={Style.btnDiv}>
                    
                    <Button
                        type={"submit"}
                        text={"Save Details"}
                        onSubmit={HandleSubmit} />
                </div>
            </form>
            {/* <button onClick={success}>jjk</button> */}
        </div>
    )
}

export default Rep_PasswordReset