import Image from "next/image"
import { memo } from "react";

interface Feature {
    imgSrc: string;
    title: string;
    text: string;
}

const FEATURE_LIST: Feature[] = [
    {
        imgSrc: "/images/features/features-icon-1.webp",
        title: "Hygienic Food",
        text: "We prioritize cleanliness at every step — from fresh ingredients to spotless kitchens — ensuring every meal is safe, clean, and delicious.",
    },
    {
        imgSrc: "/images/features/features-icon-2.webp",
        title: "Fresh Environment",
        text: "Enjoy your meals in a clean, airy, and refreshing atmosphere designed for comfort and relaxation.",
    },
    {
        imgSrc: "/images/features/features-icon-3.webp",
        title: "Skilled Chefs",
        text: "Our experienced chefs bring passion and precision to every dish, delivering flavors that truly stand out.",
    },
    {
        imgSrc: "/images/features/features-icon-4.webp",
        title: "Event & Party",
        text: `Celebrate your special moments with us—perfect space, great food, warm service, and a lively vibe for any occasion`,
    },
];

const FeatureCard = memo(({
    imgSrc, title, text
}: Feature) => (
    <li className="feature-item">
        <div className="feature-card">

            <div className="card-icon">
                <Image
                    src={imgSrc}
                    width={100}
                    height={80}
                    loading="lazy"
                    alt="icon"
                />
            </div>

            <h3 className="title-2 card-title">{title}</h3>
            <p className="label-1 card-text">{text}</p>
        </div>
    </li>
));

FeatureCard.displayName = "FeatureCard";

export const Features = memo(() => (
    <section
        className="section features text-center"
        aria-label="features"
    >
        <div className="custom-container">
            <p className="section-subtitle label-2">Why Choose Us</p>
            <h2 className="headline-1 section-title">Our Strength</h2>
            <ul className="grid-list">

                {FEATURE_LIST.map(feature => (
                    <FeatureCard
                        key={feature.imgSrc}
                        imgSrc={feature.imgSrc}
                        title={feature.title}
                        text={feature.text}
                    />
                ))}

            </ul>

            <Image
                src="/images/shapes/shape-7.webp"
                width={208}
                height={178}
                loading="lazy"
                alt="shape"
                className="shape shape-1"
            />

            <Image
                src="/images/shapes/shape-8.webp"
                width={120}
                height={115}
                loading="lazy"
                alt="shape"
                className="shape shape-2"
            />

        </div>
    </section>
));

Features.displayName = "Features";