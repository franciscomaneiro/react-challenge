import { createEvent } from '@cobuildlab/react-simple-state';

export const onSendForm = createEvent<string>();
export const onSendFormError = createEvent<Error>();
export const onUpdateForm = createEvent<string>();
export const onUpdateFormError = createEvent<Error>();