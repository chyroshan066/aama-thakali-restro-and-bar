"use client";

import Image from "next/image";
import { memo } from "react";
import { useEffect } from 'react';

export const useParallax = () => {
    useEffect(() => {
        const parallaxItems = document.querySelectorAll("[data-parallax-item]");

        const handleMouseMove = (event: MouseEvent) => {
            let x = (event.clientX / window.innerWidth * 10) - 5;
            let y = (event.clientY / window.innerHeight * 10) - 5;

            // reverse the number eg. 20 -> -20, -5 -> 5
            x = x - (x * 2);
            y = y - (y * 2);

            for (let i = 0, len = parallaxItems.length; i < len; i++) {
                const item = parallaxItems[i] as HTMLElement;
                const speed = Number(item.dataset.parallaxSpeed);
                const transformX = x * speed;
                const transformY = y * speed;
                item.style.transform = `translate3d(${transformX}px, ${transformY}px, 0px)`;
            }
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);
};

export const About = memo(() => {
    useParallax();

    return <>
        <section
            className="section about text-center"
            aria-labelledby="about-label"
            id="about"
        >
            <div className="custom-container">
                <div className="about-content">
                    <p
                        className="label-2 section-subtitle"
                        id="about-label"
                    >
                        Our Story
                    </p>
                    <h2 className="headline-1 section-title">Where Passion Meets the Plate</h2>
                    <p className="section-text">
                        Finding the perfect restaurant in Thamel means looking for more than just a menu; it&apos;s about finding a vibe that resonates. Meraki Cafe, Restro & Bar was born from the Greek concept of Meraki—doing something with soul, creativity, and love. Located at the bustling Narsingh Chowk Marg, we have quickly become a destination for those seeking the best restaurant in Kathmandu for authentic international flavors and a sophisticated atmosphere.
                    </p>
                    <p className="section-text">
                        While the streets of Thamel offer endless options, Meraki stands out as a premier Turkish restaurant in Kathmandu. Our kitchen is a bridge between cultures, specializing in authentic Turkish dishes that bring the spice markets of Istanbul to your plate.
                    </p>
                    <p className="section-text">
                        From our signature succulent Kebabs and freshly baked Turkish Pide to the rich, honeyed layers of our traditional Baklava, every recipe is prepared with the "Meraki" touch. Whether you are searching for a hearty Turkish breakfast to start your day or a late-night Restro & Bar experience with curated cocktails, we offer a sanctuary away from the city&apos;s hustle.
                    </p>
                    <div className="contact-label">Book Through Call</div>
                    <a
                        href="tel:+9779806658055"
                        className="body-1 contact-number hover-underline"
                    >
                        +977 9806658055
                    </a>

                </div>
                <figure className="about-banner">

                    <Image
                        src="/images/about/about-banner.jpg"
                        width={570}
                        height={570}
                        loading="lazy"
                        alt="about banner"
                        className="w-fill"
                        data-parallax-item
                        data-parallax-speed="1"
                    />

                    <div
                        className="abs-img abs-img-1 has-before"
                        data-parallax-item
                        data-parallax-speed="1.75"
                    >

                        <Image
                            src="/images/about/about-abs-image.webp"
                            width={285}
                            height={285}
                            loading="lazy"
                            alt=""
                            className="w-fill"
                        />

                    </div>
                    <div className="abs-img abs-img-2 has-before">
                        <Image
                            src="/images/try.png"
                            width="133"
                            height="134"
                            loading="lazy"
                            alt=""
                        />
                    </div>
                </figure>

                <Image
                    src="/images/shapes/shape-3.webp"
                    width="197"
                    height="194"
                    loading="lazy"
                    alt=""
                    className="shape"
                />

            </div>
        </section >
    </>;
});

About.displayName = "About";