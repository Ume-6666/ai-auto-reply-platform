import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const navigate = useNavigate();

  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    loadCount();
  }, []);

  const loadCount = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8080/api/users/count"
      );

      setTotalUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#f1f5f9",
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: "260px",
          background: "#0f172a",
          color: "white",
          padding: "25px",
          boxShadow: "4px 0 15px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            marginBottom: "25px",
          }}
        >
          🤖 AI Platform
        </h1>

        <hr />
        <button
  onClick={() => navigate("/profile")}
  style={btnStyle}
>
  👤 Profile
</button>

        <button
          onClick={() => navigate("/users")}
          style={btnStyle}
        >
          👥 Users
        </button>

        <button
          onClick={() => navigate("/aireply")}
          style={btnStyle}
        >
          🤖 AI Reply
        </button>
        <button
  onClick={() => navigate("/history")}
  style={btnStyle}
>
  📜 History
</button>

        <button
          onClick={() => navigate("/")}
          style={btnStyle}
        >
          🚪 Logout
        </button>
      </div>

      {/* Main */}
      <div
        style={{
          flex: 1,
          padding: "30px",
        }}
      >
        {/* Welcome Card */}
        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "20px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
          }}
        >
          <h1
            style={{
              margin: 0,
              color: "#0f172a",
            }}
          >
            Welcome Umesh 👋
          </h1>

          <p
            style={{
              color: "#64748b",
              marginTop: "10px",
            }}
          >
            AI Auto Reply Platform Dashboard
          </p>

          <p
            style={{
              color: "#94a3b8",
            }}
          >
            {new Date().toLocaleString()}
          </p>
        </div>

        {/* Analytics Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
            marginTop: "25px",
          }}
        >
          <div
            style={{
              ...cardStyle,
              background:
                "linear-gradient(135deg,#2563eb,#3b82f6)",
              color: "white",
            }}
          >
            <h2>👥 Total Users</h2>
            <h1>{totalUsers}</h1>
          </div>

          <div
            style={{
              ...cardStyle,
              background:
                "linear-gradient(135deg,#8b5cf6,#a855f7)",
              color: "white",
            }}
          >
            <h2>🤖 AI Replies</h2>
            <h1>125</h1>
          </div>

          <div
            style={{
              ...cardStyle,
              background:
                "linear-gradient(135deg,#10b981,#22c55e)",
              color: "white",
            }}
          >
            <h2>📈 Activity</h2>
            <h1>100%</h1>
          </div>
        </div>

        {/* Main Panel */}
        <div
          style={{
            background: "white",
            marginTop: "30px",
            padding: "30px",
            borderRadius: "20px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
          }}
        >
          <h2
            style={{
              color: "#0f172a",
            }}
          >
            🚀 AI Auto Reply Platform
          </h2>

          <p
            style={{
              color: "#64748b",
              marginTop: "10px",
            }}
          >
            Full Stack React + Spring Boot + MySQL
            Project Dashboard
          </p>

          <div
            style={{
              marginTop: "25px",
              display: "flex",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => navigate("/users")}
              style={actionBtnBlue}
            >
              👥 Manage Users
            </button>

            <button
              onClick={() => navigate("/aireply")}
              style={actionBtnGreen}
            >
              🤖 Generate Reply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const btnStyle = {
  width: "100%",
  padding: "14px",
  marginTop: "15px",
  background: "#1e293b",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  fontSize: "16px",
};

const cardStyle = {
  padding: "25px",
  borderRadius: "20px",
  textAlign: "center",
  boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
};

const actionBtnBlue = {
  background: "#2563eb",
  color: "white",
  border: "none",
  padding: "14px 25px",
  borderRadius: "12px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "bold",
};

const actionBtnGreen = {
  background: "#10b981",
  color: "white",
  border: "none",
  padding: "14px 25px",
  borderRadius: "12px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "bold",
};

export default Dashboard;