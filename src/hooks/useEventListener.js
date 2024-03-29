import {useEffect, useRef} from "react";

export const useEventListener = (element, eventName, handler) => {
    const savedHandler = useRef();

    useEffect(() => {
        const target = element?.current || null;

        // Make sure that the target is a valid DOM element
        if (!(target && target.addEventListener)) {
            return;
        }

        // Make sure that we persist the handler to hook instance
        if (savedHandler.current !== handler) {
            savedHandler.current = handler;
        }

        // Setup our listener so that we can attach it to the element
        // and call our persisted hook handler
        const eventListener = (e) => {
            if (savedHandler?.current) {
                savedHandler.current(e);
            }
        };

        target.addEventListener(eventName, eventListener);

        // Remove the listener when component unmounts
        return () => target.removeEventListener(eventName, eventListener);
    }, [element, eventName, handler]);
};
