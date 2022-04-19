import React from 'react';
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import { UserFormDialog } from './UserFormDialog';
import { useForm } from 'react-hook-form';
import { UserData } from '../../../shared/types';
import { sendForm, updateForm } from '../form-actions';

export type UserDialogProps = {
  user: UserData | undefined;
  open: boolean;
  onCloseModal: () => void;
}

export const UserDialog: React.FC<UserDialogProps> = ({
  user,
  open,
  onCloseModal,
}) => {
  const initialValues = {
    firstName: user?.firstName || '',
    email: user?.email || '',
    phone: user?.phone || '',
    country: user?.country || '',
  }
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues,
  });
  const handleClose = () => {
    reset({
      firstName: '',
      email: '',
      phone: '',
      country: '',
    });
    onCloseModal();
  }
  const submitData = (data: UserData) => {
    if (user) {
      data["id"] = user.id;
      updateForm(data);
    } else {
      sendForm(data);
    }
    handleClose();
  };
  return (
    <Dialog open={open} fullWidth maxWidth="sm" onClose={handleClose}>
      <DialogTitle>
        <h4>{user ? 'Edit User' : 'Add new User'}</h4>
      </DialogTitle>
      <DialogContent dividers>
        <form onSubmit={handleSubmit(submitData)}>
          <UserFormDialog 
            user={user}
            control={control}
            errors={errors}
            reset={reset}
            onCloseModal={handleClose}
          />
        </form>
      </DialogContent>
    </Dialog>
  );
};