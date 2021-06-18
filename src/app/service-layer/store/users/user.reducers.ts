import * as fromUserAction from './user.actions';

export interface UserState {
  users: any[];
  addUser: any;
  editUser: any;
  deleteUser: any;
  loading: boolean;
  loaded: boolean;
}

export const initialState: UserState = {
  users: [],
  addUser: null,
  editUser: null,
  deleteUser: null,
  loading: false,
  loaded: false
};

export function reducerUsers(state = initialState, action: fromUserAction.UsersActions): UserState {
  switch (action.type) {
    case fromUserAction.LOAD_LIST_USERS : {
      return {
        ...state,
        loading: true
      };
    }
    case fromUserAction.LOAD_LIST_USERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        users: [...action.payload],
      };
    }
    case fromUserAction.LOAD_LIST_USERS_FAILURE: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
    case fromUserAction.LOAD_ADD_USER : {
      return {
        ...state,
        loading: true
      };
    }
    case fromUserAction.LOAD_ADD_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        addUser: action.payload
      };
    }
    case fromUserAction.LOAD_ADD_USER_FAILURE: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
    case fromUserAction.LOAD_EDIT_USER : {
      return {
        ...state,
        loading: true
      };
    }
    case fromUserAction.LOAD_EDIT_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        editUser: action.payload
      };
    }
    case fromUserAction.LOAD_EDIT_USER_FAILURE: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
    case fromUserAction.LOAD_DELETE_USER : {
      return {
        ...state,
        loading: true
      };
    }
    case fromUserAction.LOAD_DELETE_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        deleteUser: action.payload
      };
    }
    case fromUserAction.LOAD_DELETE_USER_FAILURE: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }
  return state;
}
export const getUsersLoading = (state: UserState) => state.loading;
export const getUsersLoaded = (state: UserState) => state.loaded;
export const getUsersList = (state: UserState) => state.users;
export const addUser = (state: UserState) => state.addUser;
export const editUser = (state: UserState) => state.editUser;
export const deleteUser = (state: UserState) => state.deleteUser;

