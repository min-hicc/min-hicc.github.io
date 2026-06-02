import "../styles/Hero.css";

import { LuCornerDownRight } from "react-icons/lu";

import Carrot from "../assets/hero_assets/bait/carrot.svg?react";
import Lure from "../assets/hero_assets/bait/lure.svg?react";
import Shrimp from "../assets/hero_assets/bait/shrimp.svg?react";
import Worm from "../assets/hero_assets/bait/worm.svg?react";

import tackle from "../assets/hero_assets/tackle.png";
import scroll from "../assets/hero_assets/scroll.png";



function Hero({ onBaitClick, lakeImage, meImage }){
    return(
        <div className="hero-container"> 
        
            <div className="intro-text">
                <h2>Hi I'm Sharon !</h2>
                <p>Welcome to my website. I recently graduated from <strong>Rice University</strong> with a <strong>B.A. in Computer Science</strong> and spent two summers interning at <span className="red-text"><strong>Pinterest</strong></span>. I’m passionate about combining creativity and engineering to build elegant solutions with real world impact.</p>
            </div>


            <img className="lake" src={lakeImage} alt="lake"/>
            <img className="me" src={meImage} alt="me"/>
            <div className="bait-hint">
                <p>click a bait for a quick look !</p>

                <div className="arrow">
                    <LuCornerDownRight/>
                </div>
            </div>
            <div className = "bait-container">
                <div className="bait-section">
                    <Carrot className="carrot bait" onClick={() => onBaitClick("carrot")}/>
                </div>
                <div className="bait-section">
                    <Lure className="lure bait" onClick={() => onBaitClick("lure")}/>  
                </div>
                <div className="bait-section">
                    <Shrimp className="shrimp bait" onClick={() => onBaitClick("shrimp")}/>  

                </div>
                <div className="bait-section">
                    <Worm className="worm bait" onClick={() => onBaitClick("worm")}/> 
                </div>  
                <img className="tackle" src={tackle} alt="box"/>
            </div>


            <div className="hero-footer">
                <p>scroll down for more</p>
                <img className="scroll" src={scroll} alt='scroll'/>
            </div>
        </div>
    );
}

export default Hero;