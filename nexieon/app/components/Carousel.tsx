"use client";

import { cloneElement, Children, useState, useEffect } from "react";
import '../stylesheets/carousel.css'

export const CarouselItem = ({children, width}: any) => {
    return (
        <div className="carousel-item" style={{width: width}}>
            {children}
        </div>
    );
}
const Carousel = ({ children, length=2000 }: any) => {
    let [activeSlide, setActiveSlide] = useState(0);
    let asCount = 0;
    let interval: any;

    useEffect(() => {
        interval = !interval && setInterval(() => {
            console.log('ticking')

            setActiveSlide(prv => {
                asCount = prv + 1;

                return prv + 1;
            })
            
            if (asCount >= Children.count(children) - 1) {
                console.log('stop!')

                setActiveSlide(0)
            }
            
        }, length);

        return () => clearInterval(interval)
    }, []);

    return (
      <div className="carousel">
        <div className="inner" style={{transform: `translateX(-${activeSlide * 100}%)`}}>
            {Children.map(children, slide => {
                return cloneElement(slide, {width: '100%'});
            })}
        </div>
      </div>
    );
}

export default Carousel