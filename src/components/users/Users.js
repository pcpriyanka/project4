import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  const getData = async function() {
    let users = await axios.get("http://localhost:4000/employees");
    setUsers(users.data);
  };
  return (
    <>
      <button onClick={getData}>get data</button>

      <table className="table table-bordered">
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </table>
    </>
  );
}
