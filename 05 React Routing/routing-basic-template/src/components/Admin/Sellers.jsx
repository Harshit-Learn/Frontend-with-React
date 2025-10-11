import React, { useEffect, useState } from "react";
import apiClient from "../../utils/api-client";
import Loader from "../common/Loader";

const Sellers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState("");
  const [name, setName] = useState("");
  // useEffect(() => {
  //   // document.title = `Name is ${name}`;
  //   // const heading = document.querySelector("h3");
  //   // heading.style.color = "red";
  //   console.log("Component Mount.!!");
  //   return () => {
  //     console.log("Component UnMount.!!");
  //   };
  // }, [name]);
  // fetch("https://jsonplaceholder.typicode.com/users")
  //   .then((res) => res.json())
  //   .then((data) => console.log(data)).catch((error)=>{  })
  useEffect(() => {
    fetchUsers();
    // setIsLoading(true);
    // axios
    //   .get("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => {
    //     setUsers(res.data);
    //     setIsLoading(false);
    //   })
    //   .catch((err) => {
    //     setErrors(err.message);
    //     setIsLoading(false);
    //   });
  }, []);

  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      const res = await apiClient.get("/users");
      console.log(res.data);
      setUsers(res.data);
      setIsLoading(false);
    } catch (err) {
      setErrors(err.message);
      setIsLoading(false);
    } finally {
      console.log("Baki sab thik");
    }
  };
  const addUser = () => {
    const newUser = {
      name,
      id: users.length + 1,
    };
    setUsers([newUser, ...users]);
    apiClient
      .post("/users", newUser)
      .then((res) => {
        setUsers([res.data, ...users]);
      })
      .catch((err) => {
        setErrors(err.message);
        setUsers(users);
      });
  };
  const deleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
    apiClient.delete("/users/${id}").catch((err) => {
      setErrors(err.message);
      setUsers(users);
    });
  };
  const UpdateUser = (user) => {
    const updateUser = {
      ...user,
      name: user.name + "   Updated",
    };
    setUsers(users.map((u) => (u.id === user.id ? updateUser : u)));
    apiClient.patch("/users/${user.id}", updateUser).catch((err) => {
      setErrors(err.message);
      setUsers(users);
    });
  };
  // if (isLoading) return <h3>Loading..</h3>;
  return (
    <>
      <h3>Admin Sellers Page</h3>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={addUser}>Add User</button>
      {isLoading && <Loader />}
      {errors && <em>{errors}</em>}
      <table>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <p key={user.id}>{user.name}</p>
              </td>
              <td>
                <button
                  onClick={() => {
                    deleteUser(user.id);
                  }}
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    UpdateUser(user);
                  }}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Sellers;
