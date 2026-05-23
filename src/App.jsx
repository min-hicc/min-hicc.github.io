import { useState, useEffect } from 'react'
import { idleFrames, grabFrames, lakeFrames } from "./animations/me_animations";
import blue from "./assets/blobs/blue.png"
import green from "./assets/blobs/green.png"
import yellow from "./assets/blobs/yellow.png"
import red from "./assets/blobs/red.png"
import Carrot from "./assets/bait/carrot.svg?react";
import Lure from "./assets/bait/lure.svg?react";
import Shrimp from "./assets/bait/shrimp.svg?react";
import Worm from "./assets/bait/worm.svg?react";

import Scroll from "./assets/suick.svg?react";

function Hero({ onBaitClick, lakeImage, meImage }){
    return(
        <div className="hero-container"> 
            <div className="intro-text">
                <h2>Hi I'm Sharon !</h2>
                <p>Welcome to my website. I recently graduated from <strong>Rice University</strong> with a <strong>B.A. in Computer Science</strong> and spent two summers interning at <span className="red-text"><strong>Pinterest</strong></span>. I’m passionate about combining creativity and engineering to build elegant solutions with real world impact.</p>
            </div>
            <img className="lake" src={lakeImage} alt="lake"/>
            <img className="me" src={meImage} alt="me"/>
            <div className = "bait-container">
                <div className="bait-section">
                    <Carrot className="bait flipped" onClick={() => onBaitClick("carrot")}/>
                    <div className="blob-container">
                        <img className="blob" src={green} alt="green"/>

                        <div className="blob-text">
                            <h4>about me</h4>
                            <p>hello hwllo</p>
                        </div>
                    </div>
                </div>
                <div className="bait-section">
                    <Lure className="bait" onClick={() => onBaitClick("lure")}/>  
                    <div className="blob-container">
                        <img className="blob" src={red} alt="red"/>

                        <div className="blob-text">
                            <h4>projects</h4>
                            <p>hello hwllo</p>
                        </div>
                    </div>                
                </div>
                <div className="bait-section">
                    <Shrimp className="bait" onClick={() => onBaitClick("shrimp")}/>  
                    <div className="blob-container">
                        <img className="blob" src={blue} alt="blue"/>

                        <div className="blob-text">
                            <h4>experience</h4>
                            <p>hello hwllo</p>
                        </div>
                    </div>                
                </div>
                <div className="bait-section">
                    <Worm className="bait" onClick={() => onBaitClick("worm")}/> 
                    <div className="blob-container">
                        <img className="blob" src={yellow} alt="yellow"/>

                        <div className="blob-text">
                            <h4>contact</h4>
                            <p>hello hwllo</p>
                        </div>
                    </div>                
                </div>  
            </div>
        </div>
    );
}

function Popup({ value, onClose }) {
    return (
      <div className="popup-background" onClick={onClose}>
        <Scroll
            className="popup-img"
            onClick={(e) => {
            e.stopPropagation();
            console.log("clicked painted region");
            }}
        />
        <div className="popup" onClick={(e) => e.stopPropagation()}>
          <h1>{value}</h1>
          <button onClick={onClose}>close</button>
        </div>
      </div>
    );
}

function Header(){
    return (
        <div className="header">
            <p>sharon moon</p>
            <div className="header-links">
                <a href="#about">about</a>
                <a href="#projects">projects</a>
                <a href="#experience">experience</a>
                <a href="#contact">contact</a>
            </div>
        </div>
    )
}
function App(){
    const [lakeFrameIndex, setLakeFrameIndex] = useState(0);
    const [animationFrames, setAnimationFrames] = useState(idleFrames);
    const [frameIndex, setFrameIndex] = useState(0);
    const [isLooping, setIsLooping] = useState(true);
    const [quickLook, setQuickLook] = useState(null);
    const [pendingPopup, setPendingPopup] = useState(null);

    const handleBaitClick = (value) => {
        setAnimationFrames(grabFrames);
        setFrameIndex(0);
        setIsLooping(false);
        setPendingPopup(value);
    };

    const closePopup = () => {
        setQuickLook(null);
    };
    
    useEffect(() => {
        const interval = setInterval(() => {
            setFrameIndex((prev) => {
                const next = prev + 1;
                if (next >= animationFrames.length) {
                    if (isLooping) {
                        return 0;
                    }

                    clearInterval(interval);
                    setAnimationFrames(idleFrames);
                    setIsLooping(true);

                    if (pendingPopup) {
                        setQuickLook(pendingPopup);
                        setPendingPopup(null);
                    }
                    return 0;
                }
                return next;
            });
        }, 120);
        return () => clearInterval(interval);
    }, [animationFrames, isLooping, pendingPopup]);

    useEffect(() => {
        const lakeInterval = setInterval(() => {
            setLakeFrameIndex((prev) => (prev + 1) % lakeFrames.length);
        }, 800);

        return () => clearInterval(lakeInterval);
    }, []);

    return(
        <div className="App">
            <div className="app-container">
                <Header/>
                {quickLook && <Popup value={quickLook} onClose={closePopup}/>}
                <Hero
                    onBaitClick={handleBaitClick}
                    lakeImage={lakeFrames[lakeFrameIndex]}
                    meImage={animationFrames[frameIndex]}
                />
            </div>
        </div>
    )
}

export default App;