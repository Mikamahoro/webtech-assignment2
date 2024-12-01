import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
    const [user, setUser] = useState({
        id: 1, // example user ID
        username: "johndoe",
        password: "password123",
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@example.com",
        phoneNumber: "1234567890",
        role: "ROLE_USER"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., update user data)
        console.log("User data submitted:", user);
    };

    return (
        <div className="container mt-4">
            <h2>Edit User</h2>
            <form onSubmit={handleSubmit}>
                <input type="hidden" name="id" value={user.id} />
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        className="form-control"
                        value={user.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="text"
                        id="password"
                        name="password"
                        className="form-control"
                        value={user.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="form-control"
                        value={user.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="form-control"
                        value={user.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        value={user.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                    <input
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        className="form-control"
                        value={user.phoneNumber}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="role" className="form-label">Role</label>
                    <select
                        id="role"
                        name="role"
                        className="form-select"
                        value={user.role}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Select a role</option>
                        <option value="ROLE_USER">Customer</option>
                        <option value="ROLE_MANAGER">Manager</option>
                        <option value="ROLE_ADMIN">Admin</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
    );
};

export default App;
