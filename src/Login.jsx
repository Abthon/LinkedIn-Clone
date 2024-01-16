import "./Login.css"
import {useState} from "react"
import Linkedin from "@mui/icons-material/LinkedIn"

const Login = function(props) {
    return (
        <div className="login">
			<div className="login__logo">
				<span>Linked</span><Linkedin className="login__icon"/>
			</div>

			<form className="login__form">
				<input type="text" placeholder="Enter your full name"/>
				<input type="email" placeholder="Enter your email"/>
				<input type="password" placeholder="Enter your password"/>
				<input type="text" placeholder="Enter your profile url"/>
				{<input type="submit" value="submit"/>}
			</form>
		</div>
    )
}

export default Login