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
                One of the best taste restaurants in Kathmandu and Patan with reasonable price and portion.
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
                    src="/images/testimonials/t1.png"
                    width={100}
                    height={100}
                    loading="lazy"
                    alt="Sheng Fei Chien - Customer"
                    className="img"
                />

                <p className="label-2 profile-name">Sheng Fei Chien</p>
            </div>
        </div>
    </section>
));

Testimonial.displayName = "Testimonial";