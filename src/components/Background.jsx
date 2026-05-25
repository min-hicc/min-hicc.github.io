
import "../styles/Background.css";

import {useEffect, useState} from 'react';
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Projects from "./Projects";
import Contacts from "./Contacts"

import plant1 from "../assets/plants/plant1.png"
import plant2 from "../assets/plants/plant2.png"
import plant3 from "../assets/plants/plant3.png"
import plant4 from "../assets/plants/plant4.png"
import plant5 from "../assets/plants/plant5.png"


function Background(){
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    return(

        <div className="background">
            <div className="plants-layer">
                <img className="plant1" 
                    src={plant1} 
                    alt="p1" 
                    style={{ transform: `translateY(-${scrollY * 0.01}px)`}}
                />
                <img className="plant2" 
                    src={plant2} 
                    alt="p1" 
                    style={{ transform: `translateY(-${scrollY * 0.008}px)`}}
                />
                <img className="plant3" 
                    src={plant3} 
                    alt="p1" 
                    style={{ transform: `translateY(${-scrollY * 0.007}px)`}}
                />
                <img className="plant4" 
                    src={plant4} 
                    alt="p1" 
                    style={{ transform: `translateY(-${scrollY * 0.009}px)`}}
                />
                <img className="plant5" 
                    src={plant5} 
                    alt="p1" 
                    style={{ transform: `translateY(-${scrollY * 0.01}px)`}}
                />
            </div>
            <div className = "pages">
                <AboutMe/>
                <Experience/>
                <Projects/>
                <Contacts/>
            </div>
        </div>
    )
}

  
export default Background;