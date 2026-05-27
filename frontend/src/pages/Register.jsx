import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async () => {
    if (!username || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:8080/api/users/register",
        {
          username,
          email,
          password,
        }
      );

      alert("User Registered Successfully ✅");

      setUsername("");
      setEmail("");
      setPassword("");

      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Registration Failed ❌");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg,#11998e,#38ef7d)",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "20px",
          width: "400px",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        }}
      >
        <h1>📝 Register</h1>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={inputStyle}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        <button
          style={registerBtn}
          onClick={registerUser}
        >
          Register
        </button>

        <button
          style={backBtn}
          onClick={() => navigate("/")}
        >
          Back to Login
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

const registerBtn = {
  width: "100%",
  marginTop: "20px",
  padding: "12px",
  background: "#10b981",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "bold",
};

const backBtn = {
  width: "100%",
  marginTop: "10px",
  padding: "12px",
  background: "#3b82f6",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "bold",
};

export default Register;