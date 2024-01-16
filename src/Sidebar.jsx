import { Avatar } from '@mui/material';
import React from 'react';
import './Sidebar.css';
import './App.css';
import avatar from './Assets/avatar-background.png';
import HashTag from '@mui/icons-material/Tag';

function Sidebar() {

    const recentItems = (topic) => {
        return (
            <div className="sidebar__recentItem">
                <HashTag className='sidebar__hash' />
                {topic}
            </div>
        )
    }

  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img className="sidebar__avatar-background" src={avatar} alt="avatar background" />
            <Avatar className="sidebar__avatar" src="https://www.businessinsider.de/wp-content/uploads/2019/06/elon-musk.jpg"/>
            <h2>Elon Musk</h2>
            <span>Python Expert & Flutter Dev</span>
        </div>

        <div className="sidebar__status">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p  className='sidebar__statNumber'>2543</p>
            </div>
            <div className="sidebar__stat">
                <p>Views of your post</p>
                <p className='sidebar__statNumber'>2448</p>
            </div>
        </div>
        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItems("Python")}
            {recentItems("Programming")}
            {recentItems("SoftwareEngineering")}
            {recentItems("DesignPattern")}
            {recentItems("ReactJs")}
            {recentItems("Django")}
        </div>
    </div>
  )
}

export default Sidebar