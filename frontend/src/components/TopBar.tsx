import { memo } from "react";
import { IonIcon } from "./utility/IonIcon";

interface TopBarDetails {
    icon_name: string;
    span_details: string;
}

const Details = memo(({
    icon_name, span_details
}: TopBarDetails) => (
    <>
        <div className="icon">
            <IonIcon
                name={icon_name}
                aria-hidden="true"
            />
        </div>
        <span className="span">
            {span_details}
        </span>
    </>
));

Details.displayName = "Details";

export const TopBar = memo(() => (
    <div className="topbar">

        <div className="custom-container">

            <address className="topbar-item">
                <Details
                    icon_name={"location-outline"}
                    span_details={"Narsingh Chowk Marg, Kathmandu, Nepal"}
                />
            </address>

            <div className="separator"></div>

            <div className="topbar-item item-2">
                <Details
                    icon_name={"time-outline"}
                    span_details={"Daily : 7.00 am to 10.00 pm"}
                />
            </div>

            <a
                href="tel:+9779806658055"
                className="topbar-item link"
            >
                <Details
                    icon_name={"call-outline"}
                    span_details={"+977-9806658055"}
                />
            </a>

            <div className="separator"></div>

            <a
                href="#contact"
                className="topbar-item link"
            >
                <Details
                    icon_name={"mail-outline"}
                    span_details={"merakicafe04@gmail.com"}
                />
            </a>

        </div>

    </div>
));

TopBar.displayName = "TopBar";