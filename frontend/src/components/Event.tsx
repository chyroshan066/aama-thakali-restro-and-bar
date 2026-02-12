import Image from "next/image";
import { memo } from "react";
import { NavButton } from "./utility/Button/NavButton";

interface Event {
    imgSrc: string;
    dateTime: string;
    time: string;
    subtitle: string;
    title: string;
}

const EVENT_LIST: Event[] = [
    {
        imgSrc: "/images/event-1.jpg",
        dateTime: "2022-09-15",
        time: "15/09/2022",
        subtitle: "Food, Flavour",
        title: "Flavour so good you’ll try to eat with your eyes.",
    },
    {
        imgSrc: "/images/event-2.jpg",
        dateTime: "2022-09-08",
        time: "08/09/2022",
        subtitle: "Healthy Food",
        title: "Flavour so good you’ll try to eat with your eyes.",
    },
    {
        imgSrc: "/images/event-3.jpg",
        dateTime: "2022-09-03",
        time: "03/09/2022",
        subtitle: "Recipie",
        title: "Flavour so good you’ll try to eat with your eyes.",
    },
];

const EventCard = memo(({
    imgSrc, dateTime, time, subtitle, title
}: Event) => (
    <li>
        <div className="event-card has-before hover:shine">
            <div
                className="card-banner img-holder"
                style={{ "--width": "350", "--height": "450" } as React.CSSProperties}
            >

                <Image
                    src={imgSrc}
                    width={350}
                    height={450}
                    loading="lazy"
                    alt="Upcoming Event"
                    className="img-cover"
                />

                <time
                    className="publish-date label-2"
                    dateTime={dateTime}
                >
                    {time}
                </time>
            </div>
            <div className="card-content">
                <p className="card-subtitle label-2 text-center">{subtitle}</p>
                <h3 className="card-title title-2 text-center">
                    {title}
                </h3>
            </div>
        </div>
    </li>
));

EventCard.displayName = "EventCard";

export const Event = memo(() => (
    <section
        className="section event bg-black-10"
        aria-label="event-label"
        id="event"
    >
        <div className="custom-container">
            <p className="section-subtitle label-2 text-center">Recent Updates</p>
            <h2 className="section-title headline-1 text-center">Upcoming Event</h2>
            <ul className="grid-list">

                {EVENT_LIST.map(event => (
                    <EventCard
                        key={event.imgSrc}
                        imgSrc={event.imgSrc}
                        dateTime={event.dateTime}
                        time={event.time}
                        subtitle={event.subtitle}
                        title={event.title}
                    />
                ))}

            </ul>

            <NavButton
                btnText={"Book a Table"}
                href={"#contact"}
            />

        </div>
    </section>
));

Event.displayName = "Event";