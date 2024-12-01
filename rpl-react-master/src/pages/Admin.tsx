import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminDashboard = () => {
  const [notifications, setNotifications] = useState([
    { message: 'New user registered: John Doe' },
    { message: 'Server maintenance scheduled for tomorrow' },
    { message: 'Database backup completed successfully' },
  ]);
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [sortBy, setSortBy] = useState('username');
  const [notificationDropdownVisible, setNotificationDropdownVisible] = useState(false);

  // Fetch users (replace with your API call)
  useEffect(() => {
    // Example mock data
    const mockUsers = [
      { id: 1, username: 'jdoe', firstName: 'John', lastName: 'Doe', email: 'jdoe@example.com', phoneNumber: '123-456-7890', role: 'Admin', profilePicture: '/path/to/image.jpg' },
      { id: 2, username: 'asmith', firstName: 'Alice', lastName: 'Smith', email: 'asmith@example.com', phoneNumber: '987-654-3210', role: 'User', profilePicture: '/path/to/image.jpg' },
    ];
    setUsers(mockUsers);
    setTotalPages(1); // Example total pages
  }, [currentPage, pageSize, sortBy]);

  const toggleNotifications = () => {
    setNotificationDropdownVisible(!notificationDropdownVisible);
  };

  const renderNotifications = () => {
    return notifications.map((notification, index) => (
      <div key={index} className="notification-item">
        {notification.message}
      </div>
    ));
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const renderUsers = () => {
    return users.map((user) => (
      <tr key={user.id}>
        <td>{user.username}</td>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>
          <img src={user.profilePicture} alt="Profile" width="40" height="40" />
        </td>
        <td>{user.role}</td>
        <td>
          <a href={`/admin/users/edit/${user.id}`} className="btn btn-warning btn-sm">
            Edit
          </a>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => console.log(`Delete user ${user.id}`)} // Replace with delete logic
          >
            Delete
          </button>
        </td>
      </tr>




    ));
  };

  const renderPagination = () => {
    return (
      <ul className="pagination justify-content-center">
        <li className={`page-item ${currentPage === 0 ? 'disabled' : ''}`}>
          <button
            className="page-link"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
          >
            Previous
          </button>
        </li>
        {Array.from({ length: totalPages }, (_, i) => (
          <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
            <button className="page-link" onClick={() => setCurrentPage(i)}>
              {i + 1}
            </button>
          </li>
        ))}
        <li className={`page-item ${currentPage === totalPages - 1 ? 'disabled' : ''}`}>
          <button
            className="page-link"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))}
          >
            Next
          </button>
        </li>
      </ul>
    );
  };

  return (
    <div>
      <header className="header-container">
        <div id="logo">Admin Dashboard</div>
        <div>
          <button className="btn btn-light" onClick={toggleNotifications}>
            Notifications <span className="badge bg-danger">{notifications.length}</span>
          </button>
          {notificationDropdownVisible && (
            <div className="notification-dropdown">
              <h6>Notifications</h6>
              <div>{renderNotifications()}</div>
            </div>
          )}
        </div>
        <a href="/logout" className="btn btn-danger ms-auto">
          Logout
        </a>
      </header>
      <div className="container mt-4">
        <h3>User Management</h3>
        <hr />
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <label htmlFor="sort-options" className="me-2">
              Sort by:
            </label>
            <select
              id="sort-options"
              className="form-select w-auto d-inline-block"
              value={sortBy}
              onChange={handleSortChange}
            >
              <option value="username">Username</option>
              <option value="firstName">First Name</option>
              <option value="lastName">Last Name</option>
              <option value="email">Email</option>
              <option value="phoneNumber">Phone Number</option>
              <option value="role">Role</option>
            </select>
          </div>
          <div>
            <a href="/admin/users/add" className="btn btn-primary">
              Add New User
            </a>
            <a href="/admin/search" className="btn btn-primary">
              Search User
            </a>
            <a href="/admin/download/users" className="btn btn-success">
              Download Data
            </a>
            <a href="/admin/upload/users" className="btn btn-success">
              Upload Data
            </a>
          </div>
        </div>
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>Username</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Profile Picture</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{renderUsers()}</tbody>
        </table>
        {renderPagination()}
      </div>
    </div>
  );
};

export default AdminDashboard;
