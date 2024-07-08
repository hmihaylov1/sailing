import React, { useState } from "react";
import axios from "axios";

function PasswordReset() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setMessage(""); // Clear any previous error messages
  };

  const handleResetPassword = (event) => {
    event.preventDefault();

    if (email.trim() === "") {
      setMessage("Please enter your email address.");
      return;
    }

    axios
      .post("http://localhost:8081/reset-password", { email })
      .then((res) => {
        if (res.data === "Reset email sent successfully") {
          setMessage("Password reset link sent to your email.");
        } else {
          setMessage("Failed to send password reset link. Please try again.");
        }
      })
      .catch((err) => {
        setMessage("An error occurred. Please try again later.");
        console.error(err);
      });
  };

  return (
    <div className="container mt-5">
      <h2>Reset Your Password</h2>
      <form onSubmit={handleResetPassword}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        {message && <p className="text-danger">{message}</p>}
        <button type="submit" className="btn btn-primary">
          Send Reset Link
        </button>
      </form>
    </div>
  );
}

export default PasswordReset;
