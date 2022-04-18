import { createAction } from "@cobuildlab/react-simple-state";
import {
  onSendForm,
  onSendFormError,
  onUpdateForm,
  onUpdateFormError,
} from "./form-event";

export const sendForm = createAction(
  onSendForm,
  onSendFormError,
  async (data) => {
    let response;
    try {
      const lastStorage = localStorage.getItem("users");
      const lastUsers = JSON.parse(lastStorage);
      if (lastUsers?.length > 0) {
        data["id"] = lastUsers.length + 1;
        let newUser = [...lastUsers, data];
        localStorage.setItem("users", JSON.stringify(newUser));
        return (response = "Success, you have a New User!");
      }
      data["id"] = 1;
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
  async (data) => {
    let response;
    try {
      const storage = localStorage.getItem("users");
      const users = JSON.parse(storage);
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
