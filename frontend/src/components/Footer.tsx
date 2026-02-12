"use client";

import { memo, useCallback, useMemo, useState } from "react";
import { IonIcon } from "./utility/IonIcon";
import Image from "next/image";
import { AlertState, Link } from "@/types";
import { NAV_LINKS } from "@/constants";
import { SubmitButton } from "./utility/Button/SubmitButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubscriptionFormData, SubscriptionFormSchema } from "@/middlewares/schema";
import { InputField } from "./utility/InputField";
import { Alert } from "./Alert";
import { onSubscriptionSubmit } from "@/utils/subscriptionData";

const SOCIAL_LINKS: Link[] = [
    {
        name: "Facebook",
        href: "https://www.facebook.com/profile.php?id=100063725191266",
    },
];

const initialSubscriptionValues: SubscriptionFormData = {
    email: "",
};

export const Footer = memo(() => {
    const [alertState, setAlertState] = useState<AlertState>({
        isVisible: false,
        type: "success",
        message: "",
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors,
            isSubmitting,
        }
    } = useForm<SubscriptionFormData>({
        defaultValues: initialSubscriptionValues,
        resolver: zodResolver(SubscriptionFormSchema),
        mode: "onChange",
        reValidateMode: "onChange",
        criteriaMode: "all",
        shouldFocusError: true,
    });

    const showAlert = useCallback((
        type: AlertState["type"],
        message: string,
        title?: string
    ) => {
        setAlertState({
            isVisible: true,
            type,
            message,
            title,
        });
    }, []);

    const hideAlert = useCallback(() => {
        setAlertState(prev => ({
            ...prev,
            isVisible: false,
        }));
    }, []);

    const handleSubscriptionSubmit = useCallback(async (data: SubscriptionFormData) => {
        try {
            await onSubscriptionSubmit(data);

            showAlert(
                "success",
                "Thank you for subscribing! You'll receive our latest news and offers.",
                "Successfully Subscribed!"
            );

            reset(initialSubscriptionValues);
        } catch (error) {
            const errorMessage = error instanceof Error
                ? error.message
                : "Something went wrong while subscribing. Please try again.";

            showAlert(
                "error",
                errorMessage,
                "Subscription Failed"
            );

            console.error('Subscription error:', error);
        }
    }, [reset, showAlert]);

    const onSubscriptionFormSubmit = handleSubmit(handleSubscriptionSubmit);

    const isButtonDisabled = useMemo(
        () => isSubmitting,
        [isSubmitting]
    );

    const subscriptionButtonText = useMemo(
        () => isSubmitting ? "Subscribing..." : "Subscribe",
        [isSubmitting]
    );

    return <>
        <Alert
            type={alertState.type}
            title={alertState.title}
            message={alertState.message}
            isVisible={alertState.isVisible}
            onDismiss={hideAlert}
            autoDismiss={true}
            autoDismissDelay={6000}
            className="sm:max-w-md"
        />

        <footer
            className="footer section has-bg-image text-center"
            style={{ "backgroundImage": "url('/images/footer/footer-bg.webp')" } as React.CSSProperties}
        >
            <div className="custom-container">
                <div className="footer-top grid-list">
                    <div className="footer-brand has-before has-after">

                        <a
                            href="#"
                            className="logo flex justify-center"
                        >
                            <Image
                                src="/images/logo.webp"
                                width={160}
                                height={50}
                                loading="lazy"
                                alt="Gurung BBQ Home"
                            />
                        </a>

                        <address className="body-4">
                            Campus Mode, Bhadrapur, Nepal
                        </address>
                        <a
                            href="#contact"
                            className="body-4 contact-link"
                        >
                            hiddenhutrestaurant@gmail.com
                        </a>
                        <a
                            href="tel:+9779703630464
"
                            className="body-4 contact-link"
                        >
                            Booking Request : +977-970-3630464
                        </a>
                        <p className="body-4">
                            Open : 09:00 am - 10:00 pm
                        </p>

                        <div className="wrapper">
                            {[...Array(3)].map((_, index) => (
                                <div
                                    key={index}
                                    className="separator"
                                />
                            ))}
                        </div>

                        <p className="title-1">Get News & Offers</p>
                        <p className="label-1">
                            Subscribe us & Get <span className="span">Regular Updates.</span>
                        </p>
                        <form
                            className="input-wrapper"
                            onSubmit={onSubscriptionFormSubmit}
                            noValidate
                        >
                            <div className="icon-wrapper">

                                <IonIcon
                                    name="mail-outline"
                                    aria-hidden="true"
                                />

                                <InputField
                                    id="email"
                                    type="email"
                                    placeholder="Your email"
                                    register={register("email")}
                                    error={errors.email?.message}
                                    disabled={isSubmitting}
                                />

                            </div>

                            <SubmitButton
                                isButtonDisabled={isButtonDisabled}
                                btnText={subscriptionButtonText}
                            />

                        </form>
                    </div>

                    <ul className="footer-list">
                        {NAV_LINKS.map(link => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="label-2 footer-link hover-underline"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <ul className="footer-list">
                        {SOCIAL_LINKS.map(link => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="label-2 footer-link hover-underline"
                                    target="_blank"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                </div>
                <div className="footer-bottom">
                    <p className="copyright">
                        &copy; 2025 The Hidden Hut Restaurant & Bar. All Rights Reserved | Crafted by <a href="https://github.com/chyroshan066"
                            target="_blank" className="link">chyroshan066</a>
                    </p>
                </div>
            </div>
        </footer>
    </>;
});

Footer.displayName = "Footer";