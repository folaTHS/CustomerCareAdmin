import React, { useState } from 'react'
import Style from './CustomerCare_SignIn.module.css'
import Input from '../../components/SignUp_input/Input'
import Button from '../../components/button/Button'
import revenue_BG from '../../assets/svg/revenue_BG.svg'
import chart_BG from '../../assets/svg/chart_BG.svg'
import pie_BG from '../../assets/svg/pie_BG.svg'
import game_BG from '../../assets/svg/game_BG.svg'
import lady_BG from '../../assets/svg/lady_BG.svg'
import WH_logo from '../../assets/images/WH_logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { PopupContextHook } from '../../PopupContext'
import { login_provider } from '../api_detaills/provider/auth_provider'





const CustomerCare_SignIn = () => {

  const navigate = useNavigate();
  const { updateLoadingPopup, updateErrorText, updateErrorPopup } = PopupContextHook();



  const [signIn, setSignIn] = useState({
    email: '',
    password: ''
  })


  const [validation, setValidation] = useState({
    email: false,
    password: false,
  })

  const Details = (e) => {
    const name = e.target.name
    const value = e.target.value

    setSignIn(
      (prev) => ({
        ...prev,
        [name]: value
      })
    )
  }

  const LoginSubmit = async () => {

    //The request Body

    let body = signIn;

    //This initiates the provider that handles the login API.
    login_provider(body, navigate, updateLoadingPopup, updateErrorText, updateErrorPopup);

  }


  const handleSubmit = (e) => {

    e.preventDefault(e)

    let emailVal = signIn.email.includes("@") && signIn.email.includes(".") ? false : true;
    let passwordVal = signIn.password.length > 4 ? false : true;

    setValidation({
      email: emailVal,
      password: passwordVal,
    })

    let valid = emailVal == false && passwordVal == false


    if (valid) {
      LoginSubmit();
    }


    console.log(signIn.email, signIn.password)
  }


  return (
    <div id={Style.SignIn_mainDiv}>

      <div id={Style.scattered_imagesDiv}>

        <img id={Style.gamePad} src={game_BG} alt="" />

        <img src={revenue_BG} alt="" />

        <div id={Style.pie_Chart_textDiv}>

          <img src={pie_BG} alt="" />

          <div>

            <p>Daily Win</p>
            <p>$250,000</p>

          </div>

        </div>

        <img src={chart_BG} alt="" />
        <img id={Style.gamePad} src={lady_BG} alt="" />

      </div>

      <div id={Style.admin_signIn_wrapperDiv}>

        <div id={Style.SignIn_headerDiv}>

          <img src={WH_logo} alt="" />

          <p id={Style.signIn_Text}>Sign In into your Account</p>
          <p id={Style.login_detailsText}>Sign in by filling your administrator login details below</p>

        </div>

        <form action="" onSubmit={handleSubmit}>

          <div id={Style.inputDiv}>

            <Input
              placeholder={"account@email.com"}
              type={"email"}
              label={"Email"}
              name="email"
              value={signIn.email}
              onChange={Details}
              error={validation.email}
            />

            <Input
              placeholder={"Password"}
              type={"password"}
              label={"Password"}
              name="password"
              value={signIn.password}
              onChange={Details}
              error={validation.password}
            />
          </div>

          <div id={Style.checkbox_passwordDiv}>

            <p id={Style.Stay_signedIn}> <input type="checkbox" name="" id="" /> Stay Signed In</p>

            <p id={Style.forget_passwordText}>Forgot Password?</p>

          </div>


          <div id={Style.btnDiv}><Button type="submit" text={"Sign In"} />
          </div>


        </form>
      </div>
    </div >
  )
}

export default CustomerCare_SignIn