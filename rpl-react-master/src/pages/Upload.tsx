import React, { useEffect, useState } from "react";

const ManagerDashboard = () => {
  const [notifications, setNotifications] = useState([]);
  const [message, setMessage] = useState("Here you can manage expenses and monitor your team's performance.");

  useEffect(() => {
    fetchUserNotifications();
  }, []);

  const fetchUserNotifications = async () => {
    try {
      const response = await fetch("/notifications/user/unread");
      const data = await response.json();
      setNotifications(data);

      // Mark notifications as read
      markAllNotificationsAsRead();
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  const markAllNotificationsAsRead = async () => {
    try {
      await fetch("/notifications/user/mark-all-as-read", { method: "PUT" });
    } catch (error) {
      console.error("Error marking notifications as read:", error);
    }
  };

  return (
    <div>
      <header style={styles.header}>
        <h1>Manager Dashboard</h1>
      </header>

      <div style={styles.container}>
        <h2>Welcome to the Manager Page</h2>
        <p>{message}</p>

        <p>
          <a href="/logout" style={styles.link}>
            Logout
          </a>
        </p>

        <div style={styles.notifications}>
          <h3>
            Notifications <span>{notifications.length}</span>
          </h3>
          <div>
            {notifications.length > 0 ? (
              notifications.map((notification, index) => (
                <div key={index} style={styles.notificationItem}>
                  <strong>{notification.title}</strong>
                  <p>{notification.message}</p>
                </div>
              ))
            ) : (
              <p>No new notifications</p>
            )}
          </div>
        </div>
      </div>

      <footer style={styles.footer}>
        <p>&copy; 2024 Expense Trucker. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  header: {
    backgroundColor: "rgb(10, 95, 189)",
    color: "white",
    padding: "1rem",
    textAlign: "center",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  container: {
    padding: "2rem",
    maxWidth: "800px",
    margin: "auto",
    background: "white",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  notifications: {
    marginTop: "2rem",
    background: "#f9f9f9",
    padding: "1rem",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  notificationItem: {
    padding: "0.5rem",
    borderBottom: "1px solid #ddd",
  },
  footer: {
    textAlign: "center",
    padding: "1rem",
    backgroundColor: "#333",
    color: "white",
    position: "fixed",
    bottom: 0,
    width: "100%",
  },
  link: {
    color: "rgb(10, 95, 189)",
    textDecoration: "none",
  },
};

export default ManagerDashboard;
