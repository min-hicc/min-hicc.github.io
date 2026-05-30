import { FaBook } from "react-icons/fa";
import { IoMusicalNotes } from "react-icons/io5";
import { IoCodeSlash } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";

import "../styles/Popup.css";
import octopus from "../assets/hero_assets/loot/oct.png"
import trout from "../assets/hero_assets/loot/trout.png"
import rabbit from "../assets/hero_assets/loot/rab.png"
import crab from "../assets/hero_assets/loot/crab.png"


function RabbitPopup({ onClose }){
    return (
        <div className="popup-background" onClick={onClose}>
            <img className="popup-img" src={rabbit} alt="rabbit"/>
            <div className="rabbit-text" onClick={(e) => e.stopPropagation()}>
                <button className="x-button" onClick={onClose}>x</button>
                <h1>About Me</h1>
                <p>hi i am sharon ! outside of coding i love music & art and have a million hobbies. In my free time, you'll find me playing guitar, drawing, reading, cooking, or traveling.</p>
                <p>~</p>
                <p><FaBook /> Current readings: Crime and Punishment</p>
                <p><IoMusicalNotes /> Current listenings: Steely Dan </p>
                
            </div>
        </div>
      );
}

function TroutPopup({ onClose }){
    return (
        <div className="popup-background" onClick={onClose}>
            <img className="popup-img" src={trout} alt="trout"/>
            <div className="trout-text" onClick={(e) => e.stopPropagation()}>
                <button className="x-button" onClick={onClose}>x</button>
                <h1>Personal Projects</h1>
                <p>
                    i enjoy making creative projects that mix code, art, and interactivity.
                    right now my github is still growing so please check it out! <IoCodeSlash />
                </p>
            </div>
        </div>
      );
}

function CrabPopup({ onClose }){
    return (
        <div className="popup-background" onClick={onClose}>
            <img className="popup-img" src={crab} alt="crab"/>
            <div className="crab-text" onClick={(e) => e.stopPropagation()}>
                <button className="x-button" onClick={onClose}>x</button>
                <h1>Internship Experience</h1>
                <p> at pinterest, i got to work on a real-world codebase with
                    other amazing engineers. i had the opportunity to work in ads and monetization the first summer
                    and iOS platform in the second, where i got to see both the product facing and internal sides. <FaPeopleGroup />
                </p>

                <p>scroll down for more info about my projects !</p>
            </div>
        </div>
      );
}

function OctPopup({ onClose }){

    return (
        <div className="popup-background" onClick={onClose}>
            <img className="popup-img oct-img" src={octopus} alt="oct" />
            
            <div className="oct-text" onClick={(e) => e.stopPropagation()} >
                <button className="x-button" onClick={onClose} > x </button>

                <h1>Contact Me</h1>
                <div className="contact-page">

                            <p className="socials-label-oct"> find me online </p>

                            {/* GITHUB */}
                            <a
                                href="https://github.com/min-hicc"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link-oct"
                            >
                                <svg
                                    className="social-icon-oct"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.087.636-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                                </svg>
                                GitHub
                            </a>
                            {/* LINKEDIN */}
                            <a
                                href="https://www.linkedin.com/in/sharon-yehshin-moon/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link-oct"
                            >
                                <svg
                                    className="social-icon-oct"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>

                                LinkedIn
                            </a>
                            {/* EMAIL */}
                            <a
                                href="mailto:jsmoon883@gmail.com"
                                className="social-link-oct"
                            >
                                <svg
                                    className="social-icon-oct"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M2 4h20v16H2V4zm10 9L4 6v12h16V6l-8 7zm0-2 8-7H4l8 7z"/>
                                </svg>

                                Email
                            </a>
                </div>
            </div>
        </div>
    );
}


function Popup({ value, onClose }) {
    if (value == "carrot") {
        return (<RabbitPopup onClose={onClose}/>)
    }
    else if (value == "lure"){
        return (<TroutPopup onClose={onClose}/>)
    }
    else if (value == "shrimp"){
        return (<CrabPopup onClose={onClose}/>)
    }
    else if (value == "worm"){
        return (<OctPopup onClose={onClose}/>)
    }

}

export default Popup;
