import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import Widget from './Widget';
import { useSelector } from 'react-redux';
import Login from "./Login";
import {useEffect} from "react";
import {auth} from "./firebase";
import {useDispatch} from "react-redux"
import {logOut, logIn} from "./slice/UserSlice"

function App() {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch();

    useEffect(()=>{
      auth.onAuthStateChanged((user)=>{
        if(user){
          dispatch(logIn({
            "id": user.uid,
            "displayName": user.displayName,
            "email": user.email,
            "photoUrl": user.photoUrl
          }))
        }
        else{
          dispatch(logOut())
        }
      })
    },[])
    return (
        <div className="app">
      <Header/>
      {
        user ? (
      <div className="app__body">
        <Sidebar/>
        <Feed/>
        <Widget/>

      </div>
          ) : <Login/>
      }

    </div>
    );
}

export default App;