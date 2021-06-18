import {
  ActionReducerMap
} from '@ngrx/store';
import * as fromUsersReducer from './users/user.reducers';


export interface State {
  users: fromUsersReducer.UserState;
}

export const reducers: ActionReducerMap<State> = {
  users: fromUsersReducer.reducerUsers
};
