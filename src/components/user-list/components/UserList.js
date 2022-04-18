import React, { useState, useEffect } from "react";
import { useSubscription } from "@cobuildlab/react-simple-state";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { TableComponent } from "../../../shared/Table";
import { DeleteUser, FetchUser } from "../list-actions";
import {
  onDeleteUser,
  onDeleteUserError,
  onFetchUsers,
  onFetchUsersError,
} from "../list-event";
import "../_user-list.scss";

const headers = ["Name", "Email", "Phone Number", "Country"];

const UserList = () => {
  const history = useHistory();
  const [dataTable, setDataTable] = useState([]);
  useSubscription(onFetchUsers, (state) => {
    setDataTable(state);
  });

  useSubscription(onFetchUsersError, (error) => {
    toast.error(error, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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

  useSubscription(onDeleteUserError, (error) => {
    toast.error(error, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  });

  const handleClick = (type, data) => {
    if (type === "edit") {
      history.push({
        pathname: "usersEdit",
        state: data,
      });
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
      <header className="page-title">
        <h1>Users List</h1>
      </header>
      <TableComponent
        rows={dataTable}
        handleClick={handleClick}
        header={headers}
      />
    </>
  );
};

export default UserList;
