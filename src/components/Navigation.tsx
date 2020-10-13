import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import '../styles/Navigation.css'

import useSound from 'use-sound';

const darth = require("../sounds/darth.mp3");
const r2d2 = require("../sounds/R2D2beep.mp3");

export const Navigation = () => {
    const home = darth;
    const characters = r2d2;
    const [play, { pause }] = useSound(
        home,
        { volume: 0.1 }
    );
    const [playr2d2, { stop }] = useSound(
        characters,
        { volume: 0.02 }
    );
    const [isHovering, setIsHovering] = useState(
        false
    );
        console.log(isHovering);
        
    const onHoverHome = () => {
        setIsHovering(true);
        play();
    }
    const unHoverHome = () => {
        setIsHovering(false);
        pause();
    }
    const onHoverOthers = () => {
        setIsHovering(true);
        playr2d2();
    }
    const unHoverOthers = () => {
        setIsHovering(false);
        stop();
    }
    return (
        <nav className="navbarNav">
            <div className="links-div">
                <Link to='/'
                    onMouseEnter={onHoverHome}
                    onMouseLeave={unHoverHome}>
                    <button className="navbarButton homePage"></button>
                    <h1 className="hide">Home</h1>
                </Link>
            </div>
            <div className="links-div">
                <Link to='/characters'
                    onMouseEnter={onHoverOthers}
                    onMouseLeave={unHoverOthers}>
                <button className="navbarButton characters"></button>
                <h1 className="hide">Characters</h1>
                </Link>
            </div>
            <div className="links-div">
                <Link to='/planets'
                    onMouseEnter={onHoverOthers}
                    onMouseLeave={unHoverOthers}>
                <button className="navbarButton planets"></button>
                <h1 className="hide">Planets</h1>
                </Link>
            </div>
            <div className="links-div">
                <Link to='/starships'
                    onMouseEnter={onHoverOthers}
                    onMouseLeave={unHoverOthers}>
                <button className="navbarButton starships"></button>
                <h1 className="hide">Starships</h1>
                </Link>
            </div>
        </nav>
    )
}
