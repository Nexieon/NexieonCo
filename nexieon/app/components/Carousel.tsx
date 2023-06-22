"use client";

import { cloneElement, Children, useState, useEffect } from "react";
import '../stylesheets/carousel.css'

export const CarouselItem = ({children, width}: any) => {
    return (
        <div className="carousel-item h-[200px] lg:h-[450px]" style={{width: width}}>
            {children}
        </div>
    );
}

const Carousel = ({ children, length=5000 }: any) => {
    let [activeSlide, setActiveSlide] = useState(0);
    let [timer, setTimer] = useState(0);
    let timeCount = 0;
    let asCount = 0;

    useEffect(() => {
        let interval = setInterval(() => {
            setActiveSlide(prv => {
                asCount = prv + 1;

                return prv + 1;
            })
            
            if (asCount >= Children.count(children) - 1) {
                setActiveSlide(0)
            }
        }, length);

        let secondInterval = setInterval(() => {
            setTimer(t => {
                timeCount = t + 1;

                return t + 1;
            })

            if (timeCount >= length/10) {
                setTimer(0);
            }
        }, 10)

        return () => {
            clearInterval(interval)
            clearInterval(secondInterval);
        }
    }, []);

    return (
      <div className="carousel">
        <div className="inner" style={{transform: `translateX(-${activeSlide * 100}%)`}}>
            {Children.map(children, slide => {
                return cloneElement(slide, {width: '100%'});
            })}
        </div>
        <div className="w-1/2 mx-auto">
            <hr className="my-5" style={{borderTop: 'var(--primary) 3px solid', width: `${(timer/(length/10))*100}%`}}/>
        </div>
      </div>
    );
}

export default Carousel