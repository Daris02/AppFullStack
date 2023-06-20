import React from "react";

export default function List({ data }) {
  
  return (
    <>
        <main className='container d-flex justify-content-center'>
            <h2>List of All User</h2>
            {
              data.map(d => {
                <p key={d.id}>{d.name}</p>
              })
            }
        </main>
    </>
  );
}
