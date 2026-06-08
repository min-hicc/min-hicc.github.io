import {useEffect, useState, useRef, useCallback} from 'react';
import '../styles/AboutMe.css';
import grad from '../assets/about_assets/me.avif'
import fun from '../assets/about_assets/fun.png'
import yose from '../assets/about_assets/yosemite.avif'
import mala from '../assets/about_assets/mala.avif'

import empty from '../assets/about_assets/empty.png'

import { GiDoubleFish } from "react-icons/gi";

function useDraggable() {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const dragging = useRef(false);
    const offset = useRef({ x: 0, y: 0 });

    const onMouseDown = (e) => {
        dragging.current = true;
        offset.current = {
            x: e.clientX - pos.x,
            y: e.clientY - pos.y,
        };
        e.preventDefault();
    };

    const onMouseMove = useCallback((e) => {
        if (!dragging.current) return;
        setPos({
            x: e.clientX - offset.current.x,
            y: e.clientY - offset.current.y,
        });
    }, []);

    const onMouseUp = useCallback(() => {
        dragging.current = false;
    }, []);

    useEffect(() => {
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);
        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseUp);
        };
    }, [onMouseMove, onMouseUp]);

    return { pos, onMouseDown };
}

function DraggableImg({ src, alt, className, initialPos }) {
    const { pos, onMouseDown } = useDraggable(initialPos);

    return (
        <img
            className={className}
            src={src}
            alt={alt}
            onMouseDown={onMouseDown}
            style={{
                transform: `translate(${pos.x}px, ${pos.y}px)`,
                cursor: "grab",
                userSelect: "none",
            }}
        />
    );
}

function AboutMe(){
    
    return(
        <div className="aboutme-container">
            <div className="blurb-container">
                <p>ABOUT ME</p>
                <GiDoubleFish/>
                <p> i'm a computer science graduate from rice university who loves building things 
                    that are thoughtful, beautiful, and useful.
                </p>

            </div>
            <DraggableImg className="grad" src={grad} alt="pic" />
            <DraggableImg className="fun"  src={fun}  alt="pic" />
            <DraggableImg className="yose" src={yose} alt="pic" />
            <DraggableImg className="mala" src={mala} alt="pic" />
            <DraggableImg className="empty2" src={empty} alt="pic" />

        </div>
    )
}

export default AboutMe;