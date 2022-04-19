import React, { useState, useEffect } from "react";
import { useSubscription } from "@cobuildlab/react-simple-state";
import { toast } from "react-toastify";
import { TableComponent } from "../../../shared/Table";
import { DeleteUser, FetchUser } from "../list-actions";
import {
  onDeleteUser,
  onFetchUsers,
} from "../list-event";
import "../_user-list.scss";
import "../../components.scss";
import { UserData } from "../../../shared/types";
import { UserDialog } from "../../user-form/components/UserDialog";
import { onSendForm, onUpdateForm } from "../../user-form/form-event";

const headers = ["Name", "Email", "Phone Number", "Country"];

const UserList = () => {
  const [dataTable, setDataTable] = useState<UserData[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [user, setUser] = useState<UserData>();

  const handleCloseModal = () => {
    setOpenModal(false);
    setUser(undefined);
  };
  
  const createUser = () => {
    setUser(undefined);
    setOpenModal(true);
  };

  useSubscription(onSendForm, (state) => {
    FetchUser();
    toast.success(state, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  });

  useSubscription(onUpdateForm, (state) => {
    FetchUser();
    toast.success(state, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  });

  useSubscription(onFetchUsers, (state) => {
    setDataTable(state || []);
  });

  useSubscription(onDeleteUser, (state) => {
    FetchUser();
    toast.success(state, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  });

  const handleClick = (type: string, data: UserData) => {
    if (type === "edit") {
      setUser(data);
      setOpenModal(true);
    } else {
      DeleteUser(data);
    }
  };

  useEffect(() => {
    if(dataTable?.length === 0){
      FetchUser();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <header className="header-custom">
        <h1>Users List</h1>
        <button type="button" className="button-addMore" onClick={createUser}>
          +
        </button>
      </header>
      <TableComponent
        rows={dataTable}
        handleClick={handleClick}
        header={headers}
      />
      <UserDialog
        onCloseModal={handleCloseModal}
        open={openModal}
        user={user}
      />
    </>
  );
};

export default UserList;
