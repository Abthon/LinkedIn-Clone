import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import InputOption from './InputOption'
import ThumsUpIcon from '@mui/icons-material/ThumbUpOutlined'
import CommentIcon from '@mui/icons-material/CommentOutlined'
import ShareIcon from '@mui/icons-material/ShareOutlined'
import SendIcon  from '@mui/icons-material/SendOutlined'

function Post({name, description, imgUrl, message}) {
  return (
    <div className='post'>
        <div className='post__header'>
            <Avatar src={imgUrl}/>
            <div className="post__postInfo">
                <h4>{name}</h4>
                <p>{description}</p>
            </div>
        </div>

        <div className="post__body">
            <p>{message}</p>

            <div className="post__buttons">
                <InputOption text="Like" Icon={ThumsUpIcon}/>
                <InputOption text="comment"Icon={CommentIcon}/>
                <InputOption text="Share"Icon={ShareIcon}/>
                <InputOption text="Send"Icon={SendIcon}/>
            </div>
        </div>
    </div>
  )
}

export default Post