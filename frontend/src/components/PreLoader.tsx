"use client";

import { memo, useEffect } from 'react';

export const PreLoader = memo(({
    startExit,
    onLoadComplete
}: {
    startExit: boolean;
    onLoadComplete: () => void;
}) => {
    useEffect(() => {
        if (startExit) {
            // Add a small delay to ensure the loaded class is applied after startExit becomes true
            const timer = setTimeout(() => {
                const preloadElement = document.querySelector('[data-preaload]');
                if (preloadElement) {
                    preloadElement.classList.add('loaded');
                }
            }, 50);

            return () => clearTimeout(timer);
        }
    }, [startExit]);

    const handleTransitionEnd = (e: React.TransitionEvent) => {
        // Only handle the transition end for the main preloader element, not its children
        if (e.target === e.currentTarget && e.propertyName === 'transform') {
            onLoadComplete();
        }
    };

    return (
        <div
            className="preload"
            data-preaload
            onTransitionEnd={handleTransitionEnd}
        >
            <div className="circle"></div>
            <p className="text">Meraki Cafe</p>
        </div>
    );
});

PreLoader.displayName = "PreLoader";