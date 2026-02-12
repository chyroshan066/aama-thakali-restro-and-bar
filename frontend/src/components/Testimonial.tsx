import Image from "next/image";
import { memo } from "react";

export const Testimonial = memo(() => (
    <section
        className="section testi text-center has-bg-image"
        style={{ "backgroundImage": "url('/images/testimonial-bg.webp')" }}
        aria-label="testimonials"
    >
        <div className="custom-container">
            <div className="quote">”</div>
            <p className="headline-2 testi-text">
                One of the finest place in dharan especially for pork bbq.. good food and nice ambience. Enough place for group gatherings.
            </p>
            <div className="wrapper">

                {[...Array(3)].map((_, index) => (
                    <div
                        key={index}
                        className="separator"
                    />
                ))}

            </div>
            <div className="profile">

                <Image
                    src="/images/testimonials/t1.webp"
                    width={100}
                    height={100}
                    loading="lazy"
                    alt="Akash Prajapati"
                    className="img"
                />

                <p className="label-2 profile-name">Akash Prajapati</p>
            </div>
        </div>
    </section>
));

Testimonial.displayName = "Testimonial";