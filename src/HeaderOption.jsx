import React from 'react';
import './HeaderOption.css';
import {Avatar} from "@mui/material";

function HeaderOption({Icon, title, avatar}) {
  return (
    <div className='headerOption'>
        {Icon && <Icon className='headerOption__icon' />}
        {avatar && <Avatar className='headerOption__avatar' src={avatar}/>}
        <span className='headerOption__title'>{title}</span>
    </div>
  )
}

export default HeaderOption

