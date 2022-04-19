import { createEvent } from "@cobuildlab/react-simple-state";
import { UserData } from "../../shared/types";

export const onDeleteUser = createEvent<string>();
export const onDeleteUserError = createEvent<Error>();
export const onFetchUsers = createEvent<UserData[]>();
export const onFetchUsersError = createEvent<Error>();