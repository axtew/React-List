import React from "react";

import "./index.css";

const UserList = ({ setSelectedItem, list }) => {
  return (
    <table className="table-list">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {list.map(item => (
          <tr key={item.phone} onClick={() => setSelectedItem(item)}>
            <td>{item.id}</td>
            <td>{`${item.firstName} ${item.lastName}`}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
