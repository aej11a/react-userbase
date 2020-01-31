import React from "react";
import userbase, { Session, UserResult } from "userbase-js";

export type UserbaseProviderProps = {
    appId: string;
};

export const UserbaseContext = React.createContext<Promise<
    Session | UserResult | void
> | null>(null);

export const UserbaseProvider: React.FunctionComponent<UserbaseProviderProps> = ({
    appId,
    children
}) => {
    const [initPromise] = React.useState(() => userbase.init({ appId }));

    return (
        <UserbaseContext.Provider value={initPromise}>
            {children}
        </UserbaseContext.Provider>
    );
};
