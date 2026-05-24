import "./Hero.css";

import blue from "./assets/blobs/blue.png"
import green from "./assets/blobs/green.png"
import yellow from "./assets/blobs/yellow.png"
import red from "./assets/blobs/red.png"

import Carrot from "./assets/bait/carrot.svg?react";
import Lure from "./assets/bait/lure.svg?react";
import Shrimp from "./assets/bait/shrimp.svg?react";
import Worm from "./assets/bait/worm.svg?react";

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
                    <Carrot className="bait" onClick={() => onBaitClick("carrot")}/>
                    <div className="blob-container">
                        <img className="blob" src={green} alt="green" />

                        <div className="blob-text">
                            <h4>about me</h4>
                            <p>who i am & what i love</p>
                        </div>
                    </div>
                </div>
                <div className="bait-section">
                    <Lure className="bait" onClick={() => onBaitClick("lure")}/>  
                    <div className="blob-container">
                        <img className="blob" src={red} alt="red"/>

                        <div className="blob-text">
                            <h4> personal projects</h4>
                            <p>things i've built for fun</p>
                        </div>
                    </div>                
                </div>
                <div className="bait-section">
                    <Shrimp className="bait" onClick={() => onBaitClick("shrimp")}/>  
                    <div className="blob-container">
                        <img className="blob" src={blue} alt="blue"/>

                        <div className="blob-text">
                            <h4>internship experience</h4>
                            <p>professional work </p>
                        </div>
                    </div>                
                </div>
                <div className="bait-section">
                    <Worm className="bait" onClick={() => onBaitClick("worm")}/> 
                    <div className="blob-container">
                        <img className="blob" src={yellow} alt="yellow"/>

                        <div className="blob-text">
                            <h4>let's connect</h4>
                            <p>say hi & reach out !</p>
                        </div>
                    </div>                
                </div>  
            </div>
        </div>
    );
}

export default Hero;