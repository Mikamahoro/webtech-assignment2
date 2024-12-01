import React, { useState } from "react";

const SearchUser = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform the search logic here
    console.log("Search data submitted:", formData);

    // You can redirect, call APIs, or display results as needed
    // For example:
    // fetch(`/admin/search/results?username=${formData.username}&email=${formData.email}`)
    //   .then(response => response.json())
    //   .then(data => console.log(data));
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Search User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-control"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  body: {
    backgroundColor: "#007bff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    margin: 0,
    fontFamily: "Arial, sans-serif",
    color: "#ffffff",
  },
  container: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    width: "400px",
    color: "#000000",
  },
  heading: {
    color: "#333333",
    textAlign: "center",
    marginBottom: "20px",
  },
};

export default SearchUser;
