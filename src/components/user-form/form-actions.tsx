import { createAction } from "@cobuildlab/react-simple-state";
import {
  onSendForm,
  onSendFormError,
  onUpdateForm,
  onUpdateFormError,
} from "./form-event";
import { UserData } from "../../shared/types";

export const sendForm = createAction(
  onSendForm,
  onSendFormError,
  async (data: UserData) => {
    let response;
    try {
      const lastStorage = localStorage.getItem("users");
      const lastUsers: UserData[] = JSON.parse(lastStorage as string);
      if (lastUsers?.length > 0) {
        data["id"] = String(lastUsers.length + 1);
        let newUser = [...lastUsers, data];
        localStorage.setItem("users", JSON.stringify(newUser));
        return (response = "Success, you have a New User!");
      }
      data["id"] = String(1);
      localStorage.setItem("users", JSON.stringify([data]));
      response = "Success, you have a New User!";
    } catch (error) {
      return "Error at create the New User, Try again";
    }

    return response;
  }
);

export const updateForm = createAction(
  onUpdateForm,
  onUpdateFormError,
  async (data: UserData) => {
    let response;
    try {
      const storage = localStorage.getItem("users");
      const users: UserData[] = JSON.parse(storage as string);
      const usersFilter = users.filter((value) => {
        return value.id !== data.id;
      });
      localStorage.setItem("users", JSON.stringify([...usersFilter, data]));
      response = "Success at edit the user!";
    } catch (error) {
      return "Error at edit the user!";
    }

    return response;
  }
);
