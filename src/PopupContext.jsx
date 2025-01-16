import { createContext, useContext, useState } from "react"

export const myContext = createContext()

export const PopupContextHook = () => useContext(myContext)




const PopupContext = ({ children }) => {



  const [newStaffState, setnewStaffState] = useState({

    email: '',
    fullName: '',
    password: '',
  })

  const [suspendState, setSuspendState] = useState({  
    email: '',
  })

  const [phoneState, setPhoneState] = useState({
    phone: "",
    details: ""
  })


  const updateSuspendState = (data) => {
    setSuspendState(data)
  }

  const updateNewStaffState = (data) => {
    setnewStaffState(data)
  }

  const updatePhoneState = (data)=>{
    setPhoneState(data)
  }

  const [signUpPopup, setSignUpPopup] = useState(false)
  const [passwordReset, setPasswordReset] = useState(false)
  const [loadingPopup, setLoadingPopup] = useState(false)
  const [errorText, setErrorText] = useState('')
  const [errorPopup, setErrorPopup] = useState(false)
  const [suspendStaff, setSuspendStaff] = useState(false)
  const [suspendStaffSuccess, setSuspendStaffSuccess] = useState(false)
  const [suspendUser, setSuspendUser] = useState(false)
  const [suspendUserSuccess, setSuspendUserSuccess] = useState(false)



  const updateSignUpPopup = (data) => {
    setSignUpPopup(data)
  }

  const updatePasswordResetPopup = (data) => {
    setPasswordReset(data)
  }

  const updateLoadingPopup = (data) => {
    setLoadingPopup(data)
  }

  const updateErrorText = (data) => {
    setErrorText(data)
  }

  const updateErrorPopup = (data) => {
    setErrorPopup(data)
  }

  const updateSuspendStaff = (data) => {
    setSuspendStaff(data)
  }

  const updateSuspendStaffSuccess = (data) => {
    setSuspendStaffSuccess(data)
  }

  const updateSuspendUserPopup= (data) => {
    setSuspendUser(data)
  }

  const updateSuspendUserSuccess= (data) => {
    setSuspendUserSuccess(data)
  }



  return (
    <myContext.Provider value={{
      signUpPopup,
      updateSignUpPopup,
      passwordReset,
      updatePasswordResetPopup,
      loadingPopup,
      updateLoadingPopup,
      errorText,
      updateErrorText,
      errorPopup,
      updateErrorPopup,
      newStaffState,
      updateNewStaffState,
      suspendStaff,
      updateSuspendStaff,
      suspendState,
      updateSuspendState,
      suspendStaffSuccess,
      updateSuspendStaffSuccess,
      phoneState,
      updatePhoneState,
      suspendUser,
      updateSuspendUserPopup,
      suspendUserSuccess,
      updateSuspendUserSuccess

    }}>
      {children}
    </myContext.Provider>
  )
}

export default PopupContext