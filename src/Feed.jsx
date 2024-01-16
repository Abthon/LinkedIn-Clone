import {useState, useEffect} from 'react'
import CreateIcon from '@mui/icons-material/CreateOutlined';
import './Feed.css';
import InputOption from './InputOption';
import PhotoIcon from '@mui/icons-material/Photo';
import VideoIcon from '@mui/icons-material/YouTube';
import SubscriptionIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import Post from './Post';
import { firebase, db } from './firebase';

function Feed() {
    const [input, setInput] = useState(""); 
    const [posts, setPosts] = useState([])
    useEffect(()=> (
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(
            (snapshot) =>(
                setPosts(
                    snapshot.docs.map(
                        (doc) => (
                            {
                                id: doc.id, 
                                data: doc.data()
                            }
                        )
                    )
                )
            )            
        )
    ), [])

    function sendPost(e){
        e.preventDefault()
        db.collection('posts').add({
            name: "Elon Musk",
            description: "Python Expert & Flutter Dev",
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput("")
    }

  return (
    <div className='feed'>
        <div className='feed__inputContainer'>
            <div className="feed__input">
                <CreateIcon className="feed__icon" />
                <form action="#">
                    <input type="text" value={input} onChange={e=> setInput(e.target.value)} placeholder="Start a post" />
                    <button onClick={sendPost} type="submit"></button>
                </form>
            </div>

            <div className="feed__inputOption">
                <InputOption text="Photo" Icon={PhotoIcon} color="#70bff9"/>
                <InputOption text="Video" Icon={VideoIcon} color="#e7a33e"/>
                <InputOption text="Document" Icon={SubscriptionIcon} color="#c0cbcd"/>
                <InputOption text="Write Article" Icon={EventNoteIcon} color="#7fc15e"/>
            </div>
        </div>
        
        <div className="feed__post">
            {
                posts.map(({id, data: {name, description, message}}) => (
                <Post 
                key={id}
                name={name}
                description={description} 
                message={message}
                imgUrl=""
                />
                ))
            }
        </div>

    </div>
  )
}

export default Feed