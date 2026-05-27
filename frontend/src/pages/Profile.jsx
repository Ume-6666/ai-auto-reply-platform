import React from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#667eea,#764ba2)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
      }}
    >
      <div
        style={{
          width: "700px",
          background: "#fff",
          borderRadius: "25px",
          overflow: "hidden",
          boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
        }}
      >
        {/* Header */}
        <div
          style={{
            background: "linear-gradient(135deg,#2563eb,#7c3aed)",
            color: "white",
            textAlign: "center",
            padding: "40px",
          }}
        >
          <div
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              background: "white",
              margin: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "60px",
            }}
          >
            👤
          </div>

          <h1 style={{ marginTop: "15px" }}>
            Umesh Yadav
          </h1>

          <p>AI Auto Reply Platform User</p>
        </div>

        {/* Details */}
        <div style={{ padding: "35px" }}>
          <div style={rowStyle}>
            <span>👤 Username</span>
            <strong>Umesh</strong>
          </div>

          <div style={rowStyle}>
            <span>📧 Email</span>
            <strong>uu820209@gmail.com</strong>
          </div>

          <div style={rowStyle}>
            <span>🛡 Role</span>
            <strong>User</strong>
          </div>

          <div style={rowStyle}>
            <span>🆔 User ID</span>
            <strong>#001</strong>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              gap: "15px",
              marginTop: "30px",
            }}
          >
            <div style={cardStyle}>
              <h2>👥</h2>
              <h3>2</h3>
              <p>Total Users</p>
            </div>

            <div style={cardStyle}>
              <h2>🤖</h2>
              <h3>125</h3>
              <p>AI Replies</p>
            </div>

            <div style={cardStyle}>
              <h2>⭐</h2>
              <h3>100%</h3>
              <p>Activity</p>
            </div>
          </div>

          <button
            onClick={() => navigate("/dashboard")}
            style={{
              width: "100%",
              marginTop: "30px",
              background:
                "linear-gradient(135deg,#2563eb,#7c3aed)",
              color: "white",
              border: "none",
              padding: "15px",
              borderRadius: "12px",
              cursor: "pointer",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            ⬅ Back Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

const rowStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "15px 0",
  borderBottom: "1px solid #e5e7eb",
  fontSize: "18px",
};

const cardStyle = {
  flex: 1,
  background: "#f8fafc",
  padding: "20px",
  borderRadius: "15px",
  textAlign: "center",
  boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
};

export default Profile;