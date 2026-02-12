import { memo } from "react";
import { IonIcon } from "../IonIcon";
import { SlideButton } from "@/types";

export const SlideLeftButton = memo(({
    onClick, onMouseOut, onMouseOver
}: SlideButton) => (
    <button
        className="slider-btn prev"
        aria-label="slide to previous"
        data-prev-btn
        onClick={onClick}
        onMouseOver={onMouseOut}
        onMouseOut={onMouseOver}
    >
        <IonIcon name="chevron-back" />
    </button>
));

SlideLeftButton.displayName = "SlideLeftButton";