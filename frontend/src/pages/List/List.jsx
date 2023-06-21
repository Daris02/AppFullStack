import React from "react";

export default function List({ data }) {
  return (
    <>
      <main className="container d-flex flex-column align-items-center">
        <h2>List of All User</h2>
        <ul>
          {data ? data.map((user) => <li key={user.id}>{user.name}</li>) : <p>Loading...</p>}
        </ul>
      </main>
    </>
  );
}
