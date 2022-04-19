import React, { useEffect } from 'react';
import { Control, Controller, FieldErrors, FieldValues, UseFormReset } from 'react-hook-form';
import { InputText, InputEmail, InputNumber } from '../../../shared/Input';
import { UserData } from '../../../shared/types';

export type FormDialogProps = {
  user: UserData | undefined;
  control: Control<
    {
      firstName: string;
      email: string;
      phone: string;
      country: string;
    },
    any>;
  errors: {
    firstName?: FieldErrors | undefined;
    email?: FieldErrors | undefined;
    phone?: FieldErrors | undefined;
    country?: FieldErrors | undefined;
  };
  reset: UseFormReset<FieldValues>;
  onCloseModal: () => void;
}

export const UserFormDialog: React.FC<FormDialogProps> = ({ user, control, errors, reset, onCloseModal }) => {
  useEffect(() => {
    reset({
      firstName: user?.firstName,
      email: user?.email,
      phone: user?.phone,
      country: user?.country,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return (
    <div className="centered">
      <div>
        <Controller
          name='firstName'
          control={control}
          rules={{ required: "The user need a name!" }}
          render={({ field: { onChange, value } }) => (
            <>
              <InputText
                placeholder="Name"
                onChange={onChange}
                value={value}
              />
              <div className="errorText">
                {errors?.firstName && <span>{errors.firstName.message}</span>}
              </div>
            </>
          )}
        />
        <Controller
          name='email'
          control={control}
          rules={{ required: "The user need a valid email" }}
          render={({ field: { onChange, value } }) => (
            <>
              <InputEmail
                onChange={onChange}
                value={value}
                placeholder="Email"
              />
              <div className="errorText">
                {errors?.email && <span>{errors.email.message}</span>}
              </div>
            </>
          )}
        />
        <Controller
          name='phone'
          control={control}
          rules={{ required: "The user need a phone number" }}
          render={({ field: { onChange, value } }) => (
            <>
              <InputNumber
                onChange={onChange}
                value={value}
                placeholder="Number Phone"
              />
              <div className="errorText">
                {errors?.phone && <span>{errors.phone.message}</span>}
              </div>
            </>
          )}
        />
        <Controller
          name='country'
          control={control}
          rules={{ required: "The user need a country!" }}
          render={({ field: { onChange, value } }) => (
            <>
              <InputText
                onChange={onChange}
                value={value}
                placeholder="Country"
              />
              <div className="errorText">
                {errors?.country && <span>{errors.country.message}</span>}
              </div>
            </>
          )}
        />
        <button className="cancel-button" type="button" onClick={onCloseModal}>
          Cancel
        </button>
        <button type="submit">
          Send
        </button>
      </div>
    </div>
  );
};