import React from 'react'
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Navbar = () => {

    const { dispatch } = useContext(DarkModeContext);


    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" name="" id="" placeholder="search..." />
                    <SearchIcon />
                </div>

                <div className="items">
                    <div className="item">
                        <LanguageIcon className="icon" />
                        English
                    </div>
                    <div className="item">
                        <DarkModeIcon className="icon" onClick={() => dispatch({ type: "TOGGLE" })} />

                    </div>
                    <div className="item">
                        <FullscreenExitIcon className="icon" />

                    </div>
                    <div className="item">
                        <NotificationsIcon className="icon" />
                        <div className="counter">1</div>

                    </div>
                    <div className="item">
                        <ChatBubbleIcon className="icon" />
                        <div className="counter">2</div>


                    </div>
                    <div className="item">
                        <FormatListBulletedIcon className="icon" />

                    </div>
                    <div className="item">

                        <img src="xsquare.jpg" alt="" className="avatar" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar