import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AIReply() {

  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [replyType, setReplyType] = useState("");

  const generateReply = async () => {

    const msg = message.toLowerCase();

    if (!msg.trim()) {
      alert("Please enter a message");
      return;
    }

    let generatedReply = "";
    let generatedType = "";

    // Job Queries
    if (
      msg.includes("job") ||
      msg.includes("career") ||
      msg.includes("interview")
    ) {

      generatedType = "💼 Career Query";

      generatedReply =
        "Thank you for your interest in joining our company. Our recruitment team will review your profile and contact you regarding the next steps shortly.";
    }

    // Price Queries
    else if (
      msg.includes("price") ||
      msg.includes("cost") ||
      msg.includes("fees")
    ) {

      generatedType = "💰 Pricing Query";

      generatedReply =
        "Thank you for your inquiry. Our sales team will provide complete pricing and package details shortly.";
    }

    // Support Queries
    else if (
      msg.includes("issue") ||
      msg.includes("problem") ||
      msg.includes("error") ||
      msg.includes("help")
    ) {

      generatedType = "🛠 Support Query";

      generatedReply =
        "We apologize for the inconvenience. Our support team has received your request and will assist you as soon as possible.";
    }

    // Order Queries
    else if (
      msg.includes("order") ||
      msg.includes("delivery") ||
      msg.includes("shipping")
    ) {

      generatedType = "📦 Order Query";

      generatedReply =
        "Your order request has been received successfully. We will update you with delivery information shortly.";
    }

    // Refund Queries
    else if (
      msg.includes("refund") ||
      msg.includes("return") ||
      msg.includes("cancel")
    ) {

      generatedType = "💳 Refund Query";

      generatedReply =
        "Your refund/cancellation request has been registered. Our team will review it and contact you shortly.";
    }

    // College Queries
    else if (
      msg.includes("college") ||
      msg.includes("admission") ||
      msg.includes("course")
    ) {

      generatedType = "🎓 Admission Query";

      generatedReply =
        "Thank you for your interest in our academic programs. Our admissions department will share complete details shortly.";
    }

    // Greetings
    else if (
      msg.includes("hello") ||
      msg.includes("hi") ||
      msg.includes("hey")
    ) {

      generatedType = "👋 Greeting";

      generatedReply =
        "Hello! Thank you for contacting us. How may we assist you today?";
    }

    // Default
    else {

      generatedType = "🤖 General Query";

      generatedReply =
        "Thank you for your message. We appreciate your inquiry and our team will get back to you shortly.";
    }

    setReplyType(generatedType);
    setReply(generatedReply);

    // Save to Database
    try {

      await axios.post(
        "http://localhost:8080/api/history",
        {
          message: message,
          reply: generatedReply,
        }
      );

      console.log("Reply Saved ✅");

    } catch (error) {

      console.log(error);

      alert("Failed to save history ❌");
    }
  };

  const copyReply = () => {

    navigator.clipboard.writeText(reply);

    alert("Reply Copied Successfully ✅");
  };

  const clearAll = () => {

    setMessage("");
    setReply("");
    setReplyType("");
  };

  return (

    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#667eea 0%,#764ba2 100%)",
        padding: "40px",
      }}
    >

      <div
        style={{
          maxWidth: "1100px",
          margin: "auto",
          background: "white",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        }}
      >

        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >

          <h1
            style={{
              color: "#1e293b",
              marginBottom: "20px",
            }}
          >
            🤖 AI Auto Reply Generator
          </h1>

          <button
            onClick={() => navigate("/dashboard")}
            style={{
              background: "#3b82f6",
              color: "white",
              border: "none",
              padding: "12px 20px",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            ⬅ Dashboard
          </button>
        </div>

        {/* Text Area */}
        <textarea
          rows="8"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type customer message here..."
          style={{
            width: "100%",
            padding: "15px",
            fontSize: "18px",
            borderRadius: "12px",
            border: "2px solid #e2e8f0",
            outline: "none",
            resize: "none",
          }}
        />

        {/* Character Counter */}
        <div
          style={{
            textAlign: "right",
            color: "#64748b",
            marginTop: "5px",
          }}
        >
          {message.length}/500
        </div>

        {/* Buttons */}
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            gap: "15px",
          }}
        >

          <button
            onClick={generateReply}
            style={{
              background: "#10b981",
              color: "white",
              border: "none",
              padding: "15px 25px",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            🚀 Generate Reply
          </button>

          <button
            onClick={clearAll}
            style={{
              background: "#ef4444",
              color: "white",
              border: "none",
              padding: "15px 25px",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            🗑 Clear
          </button>

        </div>

        {/* Reply Section */}
        {reply && (

          <div
            style={{
              marginTop: "35px",
              background: "#0f172a",
              color: "white",
              padding: "25px",
              borderRadius: "15px",
              borderLeft: "6px solid #10b981",
            }}
          >

            <h2>✅ Generated Reply</h2>

            <h3
              style={{
                color: "#22c55e",
                marginTop: "10px",
              }}
            >
              {replyType}
            </h3>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.8",
                marginTop: "15px",
              }}
            >
              {reply}
            </p>

            <button
              onClick={copyReply}
              style={{
                marginTop: "20px",
                background: "#2563eb",
                color: "white",
                border: "none",
                padding: "12px 20px",
                borderRadius: "10px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              📋 Copy Reply
            </button>

            <div
              style={{
                display: "flex",
                gap: "20px",
                marginTop: "25px",
              }}
            >

              <div
                style={{
                  background: "#1e293b",
                  color: "white",
                  padding: "15px",
                  borderRadius: "12px",
                  flex: 1,
                  textAlign: "center",
                }}
              >
                <h3>📝 Characters</h3>
                <h2>{message.length}</h2>
              </div>

              <div
                style={{
                  background: "#0f766e",
                  color: "white",
                  padding: "15px",
                  borderRadius: "12px",
                  flex: 1,
                  textAlign: "center",
                }}
              >
                <h3>🤖 Status</h3>
                <h2>Active</h2>
              </div>

            </div>

          </div>
        )}

      </div>

    </div>
  );
}

export default AIReply;