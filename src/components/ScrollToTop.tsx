import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useLayoutEffect(() => {
        if (hash) return;

        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 0);
    }, [pathname]);

    return null;
};

export default ScrollToTop;