import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users,setUsers]=useState(loadedUsers)
  const handleDelete = (id) => {
    fetch(`https://full-stact-project-1-server-83z1rk3b3-rezaul-karims-projects.vercel.app/users/${id}`,{
      method:"DELETE"
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if (data.deletedCount>0) {
         const remaining= users.filter(user=>user._id!==id);
         setUsers(remaining)
      }
    })
  };
  return (
    <div>
      <h2 className="text-5xl text-center py-10">
        Total Users: {loadedUsers.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Created At</th>
              <th>Last logged At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <th>1</th>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td>{user.lastLoggedIn}</td>
                <td>
                  <button onClick={()=>handleDelete(user._id)} className="btn bg-theme-red">
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
