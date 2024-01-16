import React from 'react';
import './HeaderOption.css';
import {Avatar} from "@mui/material";
import {useDispatch} from "react-redux"
import {logOut} from "./slice/UserSlice"
import {auth} from "./firebase"

function HeaderOption({Icon, title, avatar}) {
	const dispatch = useDispatch();
	const logMeOut = function (){
        dispatch(logOut());
        auth.signOut();
    }
  return (
    <div className='headerOption'>
        {Icon && <Icon className='headerOption__icon' />}
        {avatar && <Avatar className='headerOption__avatar' src={avatar} onClick={logMeOut} />}
        <span className='headerOption__title'>{title}</span>
    </div>
  )
}

export default HeaderOption

