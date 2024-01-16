import HeaderOption from './HeaderOption';
import './Header.css'

/* MaterialUi Icons Imports*/
import SearchIcon from '@mui/icons-material/Search';
import LinkedinLogo from '@mui/icons-material/LinkedIn';
import HomeIcon from "@mui/icons-material/Home";
import MyNetworkIcon from "@mui/icons-material/SupervisorAccount";
import JobsIcon from "@mui/icons-material/BusinessCenter";
import MessagingIcon from "@mui/icons-material/Chat";
import NotificationIcon from "@mui/icons-material/Notifications";

function Header(){
    return (
        <div className="header">
            <div className="header__left">
                <LinkedinLogo className='header__logo' />
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" placeholder="Search" />
                </div>
            </div>
            <div className="header__right">
                <HeaderOption title="Home" Icon={HomeIcon} />
                <HeaderOption title="My Network" Icon={MyNetworkIcon} />
                <HeaderOption title="Jobs" Icon={JobsIcon} />
                <HeaderOption title="Messaging" Icon={MessagingIcon} />
                <HeaderOption title="Notifications" Icon={NotificationIcon} />
                <HeaderOption title="Me" avatar="https://www.businessinsider.de/wp-content/uploads/2019/06/elon-musk.jpg" />
            </div>
        </div>
    )
}


export default Header