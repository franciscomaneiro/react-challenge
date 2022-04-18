import { createEvent } from "@cobuildlab/react-simple-state";

export const onDeleteUser = createEvent();
export const onDeleteUserError = createEvent();
export const onFetchUsers = createEvent();
export const onFetchUsersError = createEvent();