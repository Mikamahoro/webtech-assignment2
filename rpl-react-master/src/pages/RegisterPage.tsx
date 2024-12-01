import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission
    // Replace with actual API call
    setMessage("Registration successful! Please log in.");
    console.log("Submitted Data:", formData);
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select your role
            </option>
            <option value="ROLE_USER">Customer</option>
            <option value="ROLE_MANAGER">Manager</option>
          </select>
          <button type="submit">Register</button>
        </form>
        {message && <p style={styles.message}>{message}</p>}
        <p>
          <a href="/login" style={styles.link}>
            Already have an account? Log in
          </a>
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
    color: "green",
    marginTop: "15px",
  },
  link: {
    color: "#0056b3",
    textDecoration: "none",
  },
};

export default Register;
