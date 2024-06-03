import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Navbar.css';

export default function Navbar() {
    const navigate = useNavigate();

    const goHome = () => {
        navigate(`/`); 
    };

    const goAbout = () => {
        alert("About Page coming soon!");
    };

    return (
        <>
            <nav>
                <ul>
                    <li class="nav" onClick={() => goHome()}>Home</li>
                    <li class="nav" onClick={() => goAbout()}>About</li>
                    <li class="nav nav-right"><a href="https://github.com/diodati-andrewm/fi-re-hub"><img class="nav" src={"../../../github-mark-white.png"} alt="GitHub logo"></img></a></li>
                </ul>
            </nav>
        </>
    )
}