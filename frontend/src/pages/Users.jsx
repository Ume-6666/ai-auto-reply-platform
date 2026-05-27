import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8080/api/users"
      );

      setUsers(res.data);
    } catch (error) {
      console.error(error);
      alert("Unable to load users");
    }
  };

  const deleteUser = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `http://localhost:8080/api/users/${id}`
      );

      alert("User Deleted Successfully ✅");

      loadUsers();
    } catch (error) {
      console.error(error);
      alert("Delete Failed ❌");
    }
  };

  const editUser = async (user) => {
    const newUsername = prompt(
      "Enter New Username",
      user.username
    );

    const newEmail = prompt(
      "Enter New Email",
      user.email
    );

    if (!newUsername || !newEmail) return;

    try {
      await axios.put(
        `http://localhost:8080/api/users/${user.id}`,
        {
          username: newUsername,
          email: newEmail,
          password: user.password || ""
        }
      );

      alert("User Updated Successfully ✅");

      loadUsers();
    } catch (error) {
      console.error(error);
      alert("Update Failed ❌");
    }
  };

  const filteredUsers = users.filter((user) =>
    user.username
      ?.toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f7fc",
        padding: "30px",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "25px",
        }}
      >
        <h1>👥 Registered Users</h1>

        <button
          onClick={() => navigate("/dashboard")}
          style={{
            background: "#3b82f6",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          ⬅ Back
        </button>
      </div>

      {/* Total Users */}
      <div
        style={{
          background: "#2563eb",
          color: "white",
          padding: "15px",
          borderRadius: "12px",
          width: "250px",
          marginBottom: "20px",
        }}
      >
        <h2>Total Users: {users.length}</h2>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="🔍 Search User..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "300px",
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          marginBottom: "20px",
        }}
      />

      {/* Table */}
      <div
        style={{
          background: "white",
          borderRadius: "15px",
          padding: "20px",
          boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr
              style={{
                background: "#2563eb",
                color: "white",
              }}
            >
              <th style={thStyle}>ID</th>
              <th style={thStyle}>Username</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td style={tdStyle}>{user.id}</td>
                <td style={tdStyle}>{user.username}</td>
                <td style={tdStyle}>{user.email}</td>

                <td style={tdStyle}>
                  <button
                    onClick={() => editUser(user)}
                    style={{
                      background: "#10b981",
                      color: "white",
                      border: "none",
                      padding: "8px 15px",
                      borderRadius: "8px",
                      cursor: "pointer",
                      marginRight: "10px",
                    }}
                  >
                    ✏️ Edit
                  </button>

                  <button
                    onClick={() => deleteUser(user.id)}
                    style={{
                      background: "#ef4444",
                      color: "white",
                      border: "none",
                      padding: "8px 15px",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                  >
                    🗑 Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredUsers.length === 0 && (
          <h3
            style={{
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            No Users Found
          </h3>
        )}
      </div>
    </div>
  );
}

const thStyle = {
  padding: "12px",
  textAlign: "left",
};

const tdStyle = {
  padding: "12px",
  borderBottom: "1px solid #ddd",
};

export default Users;