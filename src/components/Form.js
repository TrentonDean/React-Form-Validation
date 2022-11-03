import React, {useState} from 'react';

const Form = (props) => {
    const [firstName, setFirstName] = useState("")
    const [fNameError, setFNameError] = useState("")

    const [lastName, setLastName] = useState("")
    const [lNameError, setLNameError] = useState("")

    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")

    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const [confirmPassword, setConfirmPassword] = useState("")
    const [cPasswordError, setCPasswordError] = useState("")

    const handleFirstName = (e) => {
        setFirstName(e.target.value)
        if(e.target.value.length === 0){
            setFNameError("")
        }else if(e.target.value.length <= 1){
            setFNameError("First Name must be at least 2 characters");
        }else {
            setFNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value)
        if(e.target.value.length === 0){
            setLNameError("")
        }else if(e.target.value.length <= 1){
            setLNameError("Last Name must be at least 2 characters")
        }else {
            setLNameError("")
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
        if(e.target.value.length === 0){
            setEmailError("")
        }else if(e.target.value.length <= 1){
            setEmailError("Email must be at least 2 characters")
        }else {
            setEmailError("")
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
        if(e.target.value.length === 0){
            setPasswordError("")
        }else if(e.target.value.length <= 8){
            setPasswordError("Password must be at least 8 characters")
        }else {
            setPasswordError("")
        }
    }

    const handleCPassword = (e) => {
        setConfirmPassword(e.target.value)
        if(e.target.value.length === 0){
            setCPasswordError("")
        }else if(e.target.value === password){
            setCPasswordError("")
        }else if(e.target.value !== password){
            setCPasswordError("Passwords must match")
        }else{
            setCPasswordError("")
        }
    }

    return(
        <form>
            <div className="input-group mb-3">
                <span className="input-group-text form-control" id="basic-addon1">First Name: </span>
                <input type="text" name="firstName" value={firstName} onChange={handleFirstName}/>
            </div>
            <div className='error'>
                {
                    fNameError ?
                    <p>{fNameError}</p>:
                    ''
                }
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text form-control" id="basic-addon1">Last Name: </span>
                <input type="text" name="lastName" value={lastName} onChange={handleLastName} />
            </div>
            <div className='error'>
                {
                    lNameError ?
                    <p>{lNameError}</p>:
                    ''
                }
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text form-control" id="basic-addon1">Email: </span>
                <input type="email" name="email" value={email} onChange={handleEmail} />
            </div>
            <div className='error'>
                {
                    emailError ?
                    <p>{emailError}</p>:
                    ''
                }
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text form-control" id="basic-addon1">Password: </span>
                <input type="password" name="password" value={password} onChange={handlePassword} />
            </div>
            <div className='error'>
                {
                    passwordError ?
                    <p>{passwordError}</p>:
                    ''
                }
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text form-control" id="basic-addon1">Confirm Password: </span>
                <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleCPassword} />
            </div>
            <div className='error'>
                {
                    cPasswordError ?
                    <p>{cPasswordError}</p>:
                    ''
                }
            </div>
        </form>
    )
}

export default Form;