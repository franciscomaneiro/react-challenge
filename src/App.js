import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Switch, Route, NavLink } from "react-router-dom";
import UserForm from './components/user-form/components/UserForm';
import UserFormEdit from "./components/user-form/components/UserFormEdit";
import UserList from './components/user-list/components/UserList';
import './styles.scss';
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="app layout">
      <aside>
        <header> <div className="logo"/> </header>
        <nav>
          <ul>
            <li>
              <NavLink to="/" activeClassName="active" exact>User List</NavLink>
            </li>
            <li>
              <NavLink to="/users" activeClassName="active">Users</NavLink>
            </li>
          </ul>
        </nav>
      </aside>
      <main>
        <Switch>
          <Route exact path="/" component={UserList}/>
          <Route exact path="/users" component={UserForm} />
          <Route exact path="/usersEdit" component={UserFormEdit} />
        </Switch>
      </main>
      <ToastContainer autoClose={1000} />
    </div>
  );
}

export default React.memo(App);
