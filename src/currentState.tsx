import { useState, useContext, useEffect } from "react";
import { Session } from "userbase-js";
import { UserbaseContext } from "./UserbaseContext";

// These hooks are a WIP.
// They need to be independent of sessionStorage - will probably involve communication
//   with userbase-js itself.

export const useIsSignedIn: () => boolean = () => {
    const [initHasResolved, setInitHasResolved] = useState(false);
    const initPromise = useContext(UserbaseContext);

    useEffect(() => {
        if (initPromise) initPromise.then(() => setInitHasResolved(true));
    }, []);

    if (initHasResolved && sessionStorage.getItem("userbaseCurrentSession")) {
        return JSON.parse(sessionStorage.getItem("userbaseCurrentSession")!)
            .signedIn;
    } else return false;
};

export const useCurrentSession: () => Session = () => {
    const [initHasResolved, setInitHasResolved] = useState(false);
    const initPromise = useContext(UserbaseContext);

    useEffect(() => {
        if (initPromise) initPromise.then(() => setInitHasResolved(true));
    }, []);

    if (initHasResolved && sessionStorage.getItem("userbaseCurrentSession")) {
        return JSON.parse(sessionStorage.getItem("userbaseCurrentSession")!);
    } else return null;
};
