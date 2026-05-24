import { useState, useEffect } from 'react'
import { idleFrames, grabFrames, lakeFrames } from "./animations/me_animations";

import Hero from "./Hero";
import Popup from "./Popup";


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