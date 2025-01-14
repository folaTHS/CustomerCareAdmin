import React, { useState } from 'react'
import Input from '../../../components/SignUp_input/Input'
import Style from './AddNew_Agent.module.css'
import Button from '../../../components/button/Button'
import { PopupContextHook } from '../../../PopupContext'
import { addStaffProvider } from '../../api_detaills/provider/staff_provider'


const AddNew_Agent = () => {

    const { updateSignUpPopup, updateLoadingPopup, updateErrorPopup, updateErrorText, updateNewStaffState } = PopupContextHook()


    const random_arr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

    const [password, setPassword] = useState("")



    const generateRandomPassword = () => {
        setPassword("")
        let newPassword = ""
        for (let i = 0; i < 8; i++) {
            let random_index = Math.floor(Math.random() * random_arr.length)
            let random_char = random_arr[random_index]
            newPassword += random_char
        }
        setPassword(newPassword)
    }


    const [addStaff, setAddStaff] = useState({

        fullname: "",
        email: "",
        password: password
    })


    const [validation, setValidation] = useState({
        fullName: false,
        email: false,
        password: false,
    })


    const details = (e) => {
        const name = e.target.name
        const value = e.target.value

        setAddStaff(
            (prev) => ({
                ...prev,
                [name]: value
            })
        )
    }

    const newStaff = () => {

        const body = addStaff
        addStaffProvider(body, updateLoadingPopup, updateErrorPopup, updateErrorText, updateSignUpPopup)
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        let emailVal = addStaff.email.includes("@") && addStaff.email.includes(".") ? false : true;
        let fullNameVal = addStaff.fullname.length > 6 ? false : true;
        let passwordVal = password.length > 5 ? false : true;
    
        setValidation({
          email: emailVal,
          password: passwordVal,
          fullName: fullNameVal
        })
    
        let valid = emailVal == false && passwordVal == false && fullNameVal == false
    
    
        if (valid) {

          newStaff() 

           updateNewStaffState({
            fullName: addStaff.fullname,
            email: addStaff.email,
            password: password
        })
        }
       
       
    }



    return (

        <div id={Style.AddNew_Agent_mainDiv}>

            <div id={Style.AddNew_Agent_wrapperDiv}>

                <p id={Style.AddNew_Agent_headerText}>Staff Details</p>

                <form action="" onSubmit={handleSubmit}>

                    <p className={Style.AddNew_Agent_formText}>Fill staff detail to continue</p>

                    <div>
                        <div id={Style.inputDiv}>
                            <Input
                                label={"Full Name"}
                                placeholder={"Type Full Name"}
                                type="text"
                                name="fullname"
                                value={addStaff.fullname}
                                onChange={details}
                                error={validation.fullName}
                            />

                            <Input
                                label={"Email Address"}
                                placeholder={" Type Email Address"}
                                type="email"
                                name="email"
                                value={addStaff.email}
                                onChange={details}
                                error={validation.email}
                            />
                        </div>


                        <p className={Style.AddNew_Agent_formText}>Create Password</p>

                        <div>
                            <Input
                                label={"password"}
                                placeholder={"Type password"}
                                type="text"
                                name="password"
                                value={password}
                                onChange={details}
                                readonly={true}
                                error={validation.password}
                            />


                            <div id={Style.generatePassword} onClick={generateRandomPassword}>Auto Generate Password</div>

                        </div>

                        <div id={Style.AddNew_Agent_buttonDiv}><Button text={"Save Details"} /></div>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default AddNew_Agent