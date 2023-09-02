import { useEffect, useState } from "react";
import { getUsers } from "../../api/api.user";

export default function List() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsersLoad() {
      const allUsers = await getUsers();
      setUsers(allUsers);
    }

    getUsersLoad();
    
  }, []);

  return (
    <>
      <main className="container d-flex flex-column align-items-center">
        <h2>List of All User</h2>
        <ul>
          {users ? users.map((user) => <li key={user.id}>{user.name}</li>) : <p>Loading...</p>}
        </ul>
      </main>
    </>
  );
}
