import "./Login.css"
import {useState} from "react"
import Linkedin from "@mui/icons-material/LinkedIn"
import {auth} from "./firebase"
import {useDispatch} from "react-redux"
import {logIn} from "./slice/UserSlice"

const Login = function(props) {
	const [name, setName] = useState(null);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [profilePic, setUrl] = useState("");
	const dispatch = useDispatch();

	const register = function (e){
		e.preventDefault();
		if(!name) alert("name is required credential")

		auth.createUserWithEmailAndPassword(email, password).then(
			(userAuth) => {
				userAuth.user.updateProfile({
					displayName: name,
					photoUrl: profilePic
				}).then(()=> dispatch(logIn({
					"id": userAuth.user.uid,
					"email": userAuth.user.email,
					"name": name,
					"photoUrl": profilePic,
				})))
				}
			).catch((err) => alert(err))
	}

    return (
        <div className="login">
			<div className="login__logo">
				<span>Linked</span><Linkedin className="login__icon"/>
			</div>

			<form className="login__form">
				<input type="text" placeholder="Enter your full name" onChange={(e)=> {setName(e.target.value)}}/>
				<input type="email" placeholder="Enter your email" onChange={(e)=> {setEmail(e.target.value)}}/>
				<input type="password" placeholder="Enter your password" onChange={(e)=> {setPassword(e.target.value)}}/>
				<input type="text" placeholder="Enter your profile url" onChange={(e)=> {setUrl(e.target.value)}}/>
				<input type="submit" value="signin"/>
				<p>Not a member? <a href="" onClick={register}>Register Now</a></p>
			</form>
		</div>
    )
}

export default Login