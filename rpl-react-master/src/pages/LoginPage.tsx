import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // Clear previous messages
    setMessage('');
    setError('');

    // Example login validation
    if (username === 'admin' && password === 'admin123') {
      setMessage('Login successful!');
      // Redirect to a different page or perform further actions here
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h1>Expense Trucker</h1>
          <p>Manage your finances with ease</p>
        </div>

        <form onSubmit={handleLogin}>
          <div style={styles.formGroup}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={styles.formInput}
            />
          </div>
          <div style={styles.formGroup}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.formInput}
            />
          </div>

          <button type="submit" style={styles.loginBtn}>
            Login
          </button>
        </form>

        <div style={styles.links}>
          <a href="/forgot_password" style={styles.link}>Forgot Password?</a>
          <a href="/register" style={styles.link}>Create Account</a>
        </div>

        {message && <p style={styles.successMessage}>{message}</p>}
        {error && <p style={styles.errorMessage}>{error}</p>}
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
    borderRadius: "12px",
    boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
    padding: "2.5rem",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
  },
  header: {
    marginBottom: "2rem",
  },
  formGroup: {
    marginBottom: "1rem",
  },
  formInput: {
    width: "100%",
    padding: "0.75rem",
    border: "2px solid #ccc",
    borderRadius: "6px",
    fontSize: "1rem",
  },
  loginBtn: {
    width: "100%",
    padding: "0.75rem",
    backgroundColor: "#3498DB",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
  },
  links: {
    marginTop: "1.5rem",
    display: "flex",
    justifyContent: "space-between",
  },
  link: {
    color: "#3498DB",
    textDecoration: "none",
  },
  successMessage: {
    color: "green",
    marginTop: "1rem",
    fontSize: "0.9rem",
  },
  errorMessage: {
    color: "#E74C3C",
    marginTop: "1rem",
    fontSize: "0.9rem",
  },
};

export default LoginPage;
