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
                        Finding the perfect restaurant in Kathmandu means looking for more than just a menu; it&apos;s about discovering a place with authentic flavors, warm hospitality, and a welcoming vibe. Aama Thakali Restro & Bar was created with the spirit of traditional Nepali hospitality—serving delicious food with care, passion, and authenticity. Located at the vibrant Boudha Gate No. 2, Kathmandu, we have quickly become a favorite destination for locals and visitors searching for the best restaurant in Kathmandu for rich Indian flavors, great ambience, and memorable dining experiences.
                    </p>
                    <p className="section-text">
                        While Kathmandu offers countless dining spots, Aama Thakali Restro & Bar stands out as a popular Indian restaurant in Kathmandu where taste meets tradition. Our kitchen celebrates the bold spices and timeless recipes of Indian cuisine, bringing the vibrant flavors of the subcontinent straight to your table.
                    </p>
                    <p className="section-text">
                        From our signature aromatic curries and flavorful tandoori specialties to freshly prepared breads and comforting Thakali-style dishes, every plate is crafted with care. Whether you are looking for a satisfying meal at a restaurant in Kathmandu or a relaxed evening at a bar in Kathmandu with refreshing drinks and great company, Aama Thakali Restro & Bar offers the perfect place to enjoy food, drinks, and the lively energy of the city.
                    </p>
                    <div className="contact-label">Book Through Call</div>
                    <a
                        href="tel:+9779860301835"
                        className="body-1 contact-number hover-underline"
                    >
                        +977 9860301835
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