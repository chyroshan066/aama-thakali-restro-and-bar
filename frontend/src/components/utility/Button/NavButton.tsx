import { cn } from "@/utils/clsx";
import { memo } from "react";

interface BtnProps {
    className?: string;
    href?: string;
    btnText: string;
}

export const NavButton = memo(({
    className = "btn-primary",
    href = "#",
    btnText
}: BtnProps) => (
    <a
        href={href}
        className={cn(`btn `, className)}
    >
        <span className="text text-1">{btnText}</span>
        <span
            className="text text-2"
            aria-hidden="true"
        >
            {btnText}
        </span>
    </a>
));

NavButton.displayName = "Button";