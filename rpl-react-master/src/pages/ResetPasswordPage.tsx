import React, { useState } from "react";

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmNewPassword: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.newPassword !== formData.confirmNewPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    setMessage("Password reset successfully!");

    // Simulate API call for resetting password
    // Example:
    // fetch('/reset-password', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // })
    //   .then(response => response.json())
    //   .then(data => setMessage(data.message))
    //   .catch(error => setError("An error occurred while resetting password."));
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h2>Reset Your Password</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="newPassword">New Password:</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            placeholder="Enter new password"
            value={formData.newPassword}
            onChange={handleChange}
            required
          />

          <label htmlFor="confirmNewPassword">Confirm New Password:</label>
          <input
            type="password"
            id="confirmNewPassword"
            name="confirmNewPassword"
            placeholder="Confirm new password"
            value={formData.confirmNewPassword}
            onChange={handleChange}
            required
          />

          <button type="submit">Reset Password</button>
        </form>

        <div style={styles.message}>
          {error && <p style={styles.error}>{error}</p>}
          {message && <p style={styles.success}>{message}</p>}
        </div>
      </div>
    </div>
  );
};

const styles = {
  body: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#007bff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    margin: 0,
    color: "#ffffff",
  },
  container: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    width: "400px",
    textAlign: "center",
    color: "#000000",
  },
  message: {
    marginTop: "15px",
  },
  error: {
    color: "red",
  },
  success: {
    color: "green",
  },
};

export default ResetPassword;
