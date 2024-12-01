import React from "react";

const ManagerPage = ({ message }) => {
  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1>Welcome to the Manager Page</h1>
        {message && <p style={styles.message}>{message}</p>}
        <p>
          <a href="/logout" style={styles.link}>Logout</a>
        </p>
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
    minHeight: "100vh",
    margin: 0,
    color: "#ffffff",
  },
  container: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    width: "90%",
    maxWidth: "400px",
    color: "#333333",
  },
  message: {
    color: "#333333",
    margin: "10px 0",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
  },
};

export default ManagerPage;
