
import "../styles/Background.css";

import {useEffect, useState, useMemo} from 'react';
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Projects from "./Projects";
import Contacts from "./Contacts"

import plant1 from "../assets/background_assets/plants/plant1.png"
import plant2 from "../assets/background_assets/plants/plant2.png"
import plant3 from "../assets/background_assets/plants/plant3.png"
import plant4 from "../assets/background_assets/plants/plant4.png"
import plant5 from "../assets/background_assets/plants/plant5.png"

import fish1 from "../assets/background_assets/fish/fish1.png"
import fish2 from "../assets/background_assets/fish/fish2.png"
import fish3 from "../assets/background_assets/fish/fish3.png"
import fish4 from "../assets/background_assets/fish/fish4.png"
import fish5 from "../assets/background_assets/fish/fish5.png"



function Background(){
    const [scrollY, setScrollY] = useState(0);
    
    const fishImages = [fish1, fish2, fish3, fish4, fish5];

    const createFish = (id) => {

        const direction =
            Math.random() > 0.5
                ? "right"
                : "left";
    
        return {
            id,
    
            src:
                fishImages[
                    Math.floor(Math.random() * fishImages.length)
                ],
    
            top: `${Math.random() * 100}%`,
    
            duration: 5000 + Math.random() * 10000,
    
            bobDuration: 2000 + Math.random() * 3000,
    
            direction,
        };
    };

    const [fishes, setFishes] = useState(() => {

        return Array.from(
            { length: 12 },
            (_, i) => createFish(i)
        );
    });

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

            <div className="fish-layer">

                {fishes.map((fish) => (

                    <div
                        key={fish.id}
                        className={`fish-wrapper ${fish.direction}`}
                        style={{
                            top: fish.top,

                            animation: `
                                ${
                                    fish.direction === "right"
                                        ? "swim-right"
                                        : "swim-left"
                                }

                                ${fish.duration}ms linear forwards
                            `,
                        }}

                        onAnimationEnd={() => {

                            setFishes(prev => {

                                const filtered =
                                    prev.filter(f => f.id !== fish.id);

                                return [
                                    ...filtered,
                                    createFish(Date.now() + Math.random())
                                ];
                            });
                        }}
                    >

                            <div
                            className="fish-bob"
                            style={{
                                animationDuration: `${fish.bobDuration}ms`
                            }}
                            >

                            <img
                                className="fish"
                                src={fish.src}
                                alt="fish"
                            />

                        </div>

                    </div>

                ))}

            </div>

            <div className = "pages">

                <div id="about">
                    <AboutMe />
                </div>

                <div id="projects">
                    <Projects />
                </div>

                <div id="experience">
                    <Experience />
                </div>

                <div id="contact">
                    <Contacts />
                </div>
            </div>
        </div>
    )
}

  
export default Background;