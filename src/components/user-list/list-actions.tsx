import { createAction } from "@cobuildlab/react-simple-state";
import { UserData } from "../../shared/types";
import {
  onDeleteUser,
  onDeleteUserError,
  onFetchUsers,
  onFetchUsersError
} from "./list-event";

export const DeleteUser = createAction(
  onDeleteUser,
  onDeleteUserError,
  async (data) => {
    let response;
    try {
      const lastStorage = localStorage.getItem("users");
      const lastUsers: UserData[] = JSON.parse(lastStorage as string);
      const storageNew = lastUsers.filter((value) => { return value.id !== data.id});
      localStorage.setItem('users',JSON.stringify(storageNew));
      response = "Success, you have a delete User!";
    } catch (error) {
      return "Error at delete the User, Try again";
    }

    return response;
  }
);

export const FetchUser = createAction(
  onFetchUsers,
  onFetchUsersError,
  async () => {
    let response;
    try {
      response = JSON.parse(localStorage.getItem("users") as string);
    } catch (error) {
      return "Fail at fetch users";
    }

    return response;
  }
);
