// Define the shape of a User object
export interface User {
  id: number;
  title: string;
  content: string;
  description: string;
  created_at: Date;
  author: {
    id: number;
    name: string;
    email: string;
  };
}

// Define the shape of the User state
export interface UserState {
  loggedIn: boolean;
  loading: boolean;
  error: string | null;
}

export interface UserDetailState {
  User: User | null;
  loading: boolean;
  error: string | null;
}

// Define the shape of the actions for the User module
export enum UserActionTypes {
  FETCH_UserS_REQUEST = "FETCH_USERS_REQUEST",
  FETCH_UserS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_UserS_FAILURE = "FETCH_USERS_FAILURE",
}

// Define the shape of the action objects
export interface FetchUsersRequestAction {
  type: UserActionTypes.FETCH_UserS_REQUEST;
}

export interface FetchUsersSuccessAction {
  type: UserActionTypes.FETCH_UserS_SUCCESS;
  payload: User[];
}

export interface FetchUsersFailureAction {
  type: UserActionTypes.FETCH_UserS_FAILURE;
  payload: string;
}

// Define the type for the actions that can be dispatched
export type UserAction =
  | FetchUsersRequestAction
  | FetchUsersSuccessAction
  | FetchUsersFailureAction;
