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
                    <h2 className="headline-1 section-title">Every Flavor Tells a Story</h2>
                    <p className="section-text">
                        Nestled in the heart of Ganeshman Chowk, Dharan, Gurung BBQ stands as the best restaurant in Dharan and a proud local gem serving authentic Nepali-style barbecue with a modern twist. Founded by Dhan Bahadur Gurung, this exceptional restaurant in Dharan brings together the warmth of home-cooked flavors and the thrill of open-fire grilling.
                    </p>
                    <p className="section-text">
                        Renowned for offering the best BBQ in Dharan, our kitchen crafts every dish with care and tradition, from succulent grilled meats to rich local spices. As the premier destination for BBQ in Dharan, we&apos;ve perfected the art of smoky, savory cuisine that captures the authentic essence of Nepal&apos;s grilling heritage.
                    </p>
                    <p className="section-text">
                        Whether you&apos;re a local or just passing through, Gurung BBQ promises an unforgettable taste of Nepal&apos;s smoky, savory side, establishing itself as more than just a restaurant in Dharan – we&apos;re a culinary experience that defines what the best restaurant in Dharan should be.
                    </p>
                    <div className="contact-label">Book Through Call</div>
                    <a
                        href="tel:+804001234567"
                        className="body-1 contact-number hover-underline"
                    >
                        +977-970-3630464
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