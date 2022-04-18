import { createEvent } from '@cobuildlab/react-simple-state';

export const onSendForm = createEvent();
export const onSendFormError = createEvent();
export const onUpdateForm = createEvent();
export const onUpdateFormError = createEvent();