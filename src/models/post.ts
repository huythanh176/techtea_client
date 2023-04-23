// Define the shape of a post object
export interface Post {
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

// Define the shape of the post state
export interface PostState {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

export interface PostDetailState {
  post: Post | null;
  loading: boolean;
  error: string | null;
}

// Define the shape of the actions for the post module
export enum PostActionTypes {
  FETCH_POSTS_REQUEST = "FETCH_POSTS_REQUEST",
  FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS",
  FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE",
}

// Define the shape of the action objects
export interface FetchPostsRequestAction {
  type: PostActionTypes.FETCH_POSTS_REQUEST;
}

export interface FetchPostsSuccessAction {
  type: PostActionTypes.FETCH_POSTS_SUCCESS;
  payload: Post[];
}

export interface FetchPostsFailureAction {
  type: PostActionTypes.FETCH_POSTS_FAILURE;
  payload: string;
}

// Define the type for the actions that can be dispatched
export type PostAction =
  | FetchPostsRequestAction
  | FetchPostsSuccessAction
  | FetchPostsFailureAction;
