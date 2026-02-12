import { memo } from "react";
import { IonIcon } from "./utility/IonIcon";

export const BackToTop = memo(() => (
    <a
        href="#home"
        className="back-top-btn active"
        aria-label="back to top"
        data-back-top-btn
    >
        <IonIcon
            name="chevron-up"
            aria-hidden="true"
        />
    </a>
));

BackToTop.displayName = "BackToTop";