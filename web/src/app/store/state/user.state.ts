import { User } from "src/app/models/user.model";

export interface UserState {
  userState: User;
}

export const initialState: UserState = {
  userState: {
    permissions: null,
    isLoggedIn: false
  }
};
