import { useCallback, useState } from "react";
import userbase from "userbase-js";

export interface UserbaseActionState {
  response: object | null;
  loading: boolean;
  error: object | null;
}

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
  const [userbaseActionState, setUserbaseActionState] = useState<
    UserbaseActionState
  >({
    response: null,
    loading: false,
    error: null
  });

  const userbaseFunction = useCallback(
    options => {
      setUserbaseActionState({
        response: null,
        error: null,
        loading: true
      });
      userbase[action]({ ...parentOptions, ...options })
        // @ts-ignore
        .then((res: object) => {
          setUserbaseActionState({
            response: res,
            loading: false,
            error: null
          });
        })
        // @ts-ignore
        .catch(e => {
          setUserbaseActionState({
            error: e,
            loading: false,
            response: null
          });
        });
    },
    [action, parentOptions]
  );

  return [userbaseFunction, userbaseActionState];
};
