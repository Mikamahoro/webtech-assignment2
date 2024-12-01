import React from "react";

const users = [
    {
        id: 1,
        username: "johndoe",
        password: "password123",
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@example.com",
        phoneNumber: "1234567890",
        role: "Admin"
    },
    // Add more user data here
];

const UserList = () => {
    return (
        <div className="container mt-4">
            <h2>List</h2>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.phoneNumber}</td>
                            <td>{user.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
