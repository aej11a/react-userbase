import { useCallback, useState, useContext } from "react";
import { UserbaseContext } from "./UserbaseContext";
import userbase, { Session, UserResult } from "userbase-js";

export interface UserbaseActionState {
    response: object | null;
    loading: boolean;
    error: object | null;
}

export type GeneratedUserbasePromise = (
    options?: object
) => Promise<UserResult | Session | void>;

type UserActionStrings =
    | "signUp"
    | "signIn"
    | "signOut"
    | "updateUser"
    | "deleteUser";
type DbActionStrings =
    | "openDatabase"
    | "insertItem"
    | "updateItem"
    | "deleteItem"
    | "putTransaction";

export const useUserbase = (
    action: UserActionStrings | DbActionStrings,
    parentOptions?: object
): [Function, UserbaseActionState] => {
    const initPromise = useContext(UserbaseContext);

    const [userbaseActionState, setUserbaseActionState] = useState<
        UserbaseActionState
    >({
        response: null,
        loading: false,
        error: null
    });

    const userbaseFunction: GeneratedUserbasePromise = useCallback(
        (options?: object): Promise<UserResult | Session | void> => {
            setUserbaseActionState({
                response: null,
                error: null,
                loading: true
            });
            // @ts-ignore
            return initPromise.then(res => {
                // @ts-ignore
                return userbase[action]({ ...parentOptions, ...options })
                    .then((res: object) => {
                        setUserbaseActionState({
                            response: res,
                            loading: false,
                            error: null
                        });
                    })
                    .catch((e: Error) => {
                        setUserbaseActionState({
                            error: e,
                            loading: false,
                            response: null
                        });
                    });
            });
        },
        [action, parentOptions]
    );

    return [userbaseFunction, userbaseActionState];
};
