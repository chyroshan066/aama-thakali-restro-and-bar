import Image from "next/image";
import { memo, useState, useEffect, useCallback } from "react";
import { SlideLeftButton } from "./utility/Button/SlideLeftButton";
import { SlideRightButton } from "./utility/Button/SlideRightButton";
import { Event } from "@/types";
import { EVENT_HALL } from "@/constants";

const EventCard = memo(({
    imgSrc, isActive
}: Event & { isActive: boolean }) => (
    <div className={`event-card has-before hover:shine transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0 absolute inset-0'
        }`}
    >
        <div
            className="card-banner img-holder"
            style={{ "--width": "400", "--height": "500" } as React.CSSProperties}
        >

            <div className="relative w-full h-[500px]">
                <Image
                    src={imgSrc}
                    fill
                    alt="Event Hall Images"
                    className="object-cover w-full h-full"
                    sizes="100vw"
                />
            </div>

        </div>
    </div>
));

EventCard.displayName = "EventCard";

export const EventHall = memo(() => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % EVENT_HALL.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + EVENT_HALL.length) % EVENT_HALL.length);
    }, []);

    const pauseAutoSlide = useCallback(() => {
        setIsPaused(true);
    }, []);

    const resumeAutoSlide = useCallback(() => {
        setIsPaused(false);
    }, []);

    useEffect(() => {
        if (isPaused) return;

        const intervalId = setInterval(() => {
            nextSlide();
        }, 7000);

        return () => clearInterval(intervalId);
    }, [isPaused, nextSlide]);

    return <section
        className="section event bg-black-10"
    >
        <div className="custom-container">
            <p className="section-subtitle label-2 text-center">New Event Hall</p>
            <h2 className="section-title headline-1 text-center">Book For An Event</h2>

            <div className="relative w-full max-w-none">
                <div className="relative overflow-hidden">
                    <div className="relative h-[500px] w-full">

                        {EVENT_HALL.map((event, index) => (
                            <div
                                key={event.imgSrc}
                                className={`absolute inset-0 transition-transform duration-700 ease-in-out ${index === currentSlide
                                    ? 'translate-x-0'
                                    : index < currentSlide
                                        ? '-translate-x-full'
                                        : 'translate-x-full'
                                    }`}
                            >
                                <EventCard
                                    imgSrc={event.imgSrc}
                                    isActive={index === currentSlide}
                                />
                            </div>
                        ))}

                    </div>
                </div>

                <SlideLeftButton
                    onClick={prevSlide}
                    onMouseOver={pauseAutoSlide}
                    onMouseOut={resumeAutoSlide}
                />
                <SlideRightButton
                    onClick={nextSlide}
                    onMouseOver={pauseAutoSlide}
                    onMouseOut={resumeAutoSlide}
                />
            </div>

        </div>
    </section>
});

EventHall.displayName = "EventHall";