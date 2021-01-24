import { Action } from "@ngrx/store";

export enum UserActions {
  AttemptLogUserOut = "[User] Attempt to log user out",
  SuccessLogUserOut = "[User] Successfully log user out",
  AttemptLogUserIn = "[User] Attempt to log user in",
  SuccessLogUserIn = "[User] Successfully log user in"
}

export class LogUserOut implements Action {
  public readonly type = UserActions.AttemptLogUserOut;
  // Need to create a way that users can easily be identified and selected
  // Need to also think about this for a database prospective
  constructor (public payload: number){}
}

export class LogUserOutSuccess implements Action {
  public readonly type = UserActions.AttemptLogUserOut;
  // Need to create a way that users can easily be identified and selected
  // Need to also think about this for a database prospective
  constructor (public response’){}
}
