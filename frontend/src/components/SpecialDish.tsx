import Image from "next/image";
import { memo } from "react";
import { NavButton } from "./utility/Button/NavButton";

export const SpecialDish = memo(() => (
    <section
        className="special-dish text-center"
        aria-labelledby="dish-label"
    >
        <div className="special-dish-banner">

            <Image
                src="/images/special-dish-banner.jpg"
                width={940}
                height={900}
                loading="lazy"
                alt="special dish"
                className="img-cover"
            />

        </div>
        <div className="special-dish-content bg-black-10">
            <div className="custom-container">

                <Image
                    src="/images/badges/badge-1.webp"
                    width={28}
                    height={41}
                    loading="lazy"
                    alt="badge"
                    className="abs-img"
                />

                <p className="section-subtitle label-2">Special Dish</p>
                <h2 className="headline-1 section-title">Lobster Tortellini</h2>
                <p className="section-text">
                    Lorem Ipsum is simply dummy text of the printingand typesetting industry lorem Ipsum has been the
                    industrys standard dummy text ever since the when an unknown printer took a galley of type.
                </p>
                <div className="wrapper">
                    <del className="del body-3">Rs.40.00</del>
                    <span className="span body-1">Rs.20.00</span>
                </div>

                <NavButton
                    btnText={"View All Menu"}
                    href={"#menu"}
                />

            </div>
        </div>

        <Image
            src="/images/shapes/shape-4.webp"
            width={179}
            height={359}
            loading="lazy"
            alt=""
            className="shape shape-1"
        />

        <Image
            src="/images/shapes/shape-9.webp"
            width={351}
            height={462}
            loading="lazy"
            alt=""
            className="shape shape-2"
        />

    </section>
));

SpecialDish.displayName = "SpecialDish";