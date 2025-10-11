import React from "react";
import "./UserList.css";

const UserList = ({ users, loading, error }) => {
  if (loading) return <div>Loading..</div>;
  if (error) return <div>Something went wrong..</div>;
  if (!users) return null;
  return (
    <div className="userlist">
      {users.length &&
        users.map((user) => {
          return (
            <div key={user.id}>
              <img src={user.avatar} />
              <p>
                <strong>{user.first_name}</strong>
              </p>
              <p>{user.email}</p>
            </div>
          );
        })}
    </div>
  );
};

export default UserList;
