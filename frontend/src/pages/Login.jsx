import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg,#667eea 0%,#764ba2 100%)",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "20px",
          width: "380px",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        }}
      >
        <h1
          style={{
            marginBottom: "10px",
            color: "#1e293b",
          }}
        >
          🔐 Login
        </h1>

        <p style={{ color: "#64748b" }}>
          Welcome Back to AI Auto Reply Platform
        </p>

        <input
          type="email"
          placeholder="Enter Email"
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Enter Password"
          style={inputStyle}
        />

        <button
          style={loginBtn}
          onClick={() => navigate("/dashboard")}
        >
          Login
        </button>

        <button
          style={registerBtn}
          onClick={() => navigate("/register")}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "90%",
  padding: "12px",
  marginTop: "12px",
  borderRadius: "10px",
  border: "1px solid #cbd5e1",
  fontSize: "16px",
};

const loginBtn = {
  width: "100%",
  marginTop: "20px",
  padding: "12px",
  background: "#4f46e5",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "bold",
};

const registerBtn = {
  width: "100%",
  marginTop: "10px",
  padding: "12px",
  background: "#10b981",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "bold",
};

export default Login;