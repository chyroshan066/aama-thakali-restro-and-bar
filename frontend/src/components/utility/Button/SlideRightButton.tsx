import { memo } from "react";
import { IonIcon } from "../IonIcon";
import { SlideButton } from "@/types";

export const SlideRightButton = memo(({
    onClick, onMouseOver, onMouseOut
}: SlideButton) => (
    <button
        className="slider-btn next"
        aria-label="slide to next"
        data-next-btn
        onClick={onClick}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
    >
        <IonIcon name="chevron-forward" />
    </button>
));

SlideRightButton.displayName = "SlideRightButton";