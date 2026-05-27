import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function History() {

  const navigate = useNavigate();

  const [history, setHistory] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {

    try {

      const res = await axios.get(
        "http://localhost:8080/api/history"
      );

      setHistory(res.data);

    } catch (error) {

      console.log(error);

      alert("Failed to load history ❌");
    }
  };

  const deleteHistory = async (id) => {

    const confirmDelete = window.confirm(
      "Delete this reply history?"
    );

    if (!confirmDelete) return;

    try {

      await axios.delete(
        `http://localhost:8080/api/history/${id}`
      );

      alert("History Deleted ✅");

      loadHistory();

    } catch (error) {

      console.log(error);

      alert("Delete Failed ❌");
    }
  };

  const filteredHistory = history.filter((item) =>
    item.message
      ?.toLowerCase()
      .includes(search.toLowerCase())
  );

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#f1f5f9",
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

        <h1
          style={{
            color: "#0f172a",
          }}
        >
          📜 AI Reply History
        </h1>

        <button
          onClick={() => navigate("/dashboard")}
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "12px 20px",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          ⬅ Dashboard
        </button>

      </div>

      {/* Top Cards */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "25px",
        }}
      >

        <div
          style={{
            background: "#2563eb",
            color: "white",
            padding: "20px",
            borderRadius: "15px",
            width: "250px",
          }}
        >
          <h2>Total Replies</h2>
          <h1>{history.length}</h1>
        </div>

      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="🔍 Search history..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "350px",
          padding: "12px",
          borderRadius: "10px",
          border: "1px solid #cbd5e1",
          marginBottom: "25px",
          fontSize: "16px",
        }}
      />

      {/* History Cards */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >

        {filteredHistory.map((item) => (

          <div
            key={item.id}
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "15px",
              boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
            }}
          >

            <h3
              style={{
                color: "#0f172a",
              }}
            >
              📨 Message
            </h3>

            <p
              style={{
                color: "#475569",
                marginTop: "10px",
              }}
            >
              {item.message}
            </p>

            <h3
              style={{
                marginTop: "20px",
                color: "#16a34a",
              }}
            >
              🤖 AI Reply
            </h3>

            <p
              style={{
                color: "#334155",
                marginTop: "10px",
                lineHeight: "1.7",
              }}
            >
              {item.reply}
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "20px",
              }}
            >

              <small
                style={{
                  color: "#64748b",
                }}
              >
                ⏰ {item.createdAt}
              </small>

              <button
                onClick={() => deleteHistory(item.id)}
                style={{
                  background: "#ef4444",
                  color: "white",
                  border: "none",
                  padding: "10px 18px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                🗑 Delete
              </button>

            </div>

          </div>
        ))}

      </div>

      {/* Empty */}
      {filteredHistory.length === 0 && (

        <div
          style={{
            textAlign: "center",
            marginTop: "50px",
            color: "#64748b",
          }}
        >
          <h2>No Reply History Found</h2>
        </div>
      )}

    </div>
  );
}

export default History;