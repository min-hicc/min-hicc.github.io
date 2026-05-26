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
            <img className="popup-img oct-img" src={octopus} alt="oct"/>
            <div className="oct-text" onClick={(e) => e.stopPropagation()}>
                <button className="x-button" onClick={onClose}>x</button>
                <h1>Contact Me</h1>
                <div className="contact-page">

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
