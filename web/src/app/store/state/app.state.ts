import { RouterReducedState } from "@ngrx/router-store";
import { UserState } from "./user.state";

export interface AppState {
  router?: RouterReducedState;
  userState: UserState;
}

export const initialAppState: AppState = {
  userState: null
};

export function getInitialState(): AppState {
  return initialAppState;
}
