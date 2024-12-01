import React, { useEffect, useState } from "react";

const ManagerDashboard = () => {
    const [message, setMessage] = useState("Here you can manage expenses and monitor your team's performance.");
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        fetchUserNotifications();
    }, []);

    const fetchUserNotifications = async () => {
        try {
            const response = await fetch('/notifications/user/unread');
            const notifications = await response.json();
            setNotifications(notifications);
            markAllNotificationsAsRead();
        } catch (error) {
            console.error("Error fetching notifications:", error);
        }
    };

    const markAllNotificationsAsRead = async () => {
        try {
            await fetch('/notifications/user/mark-all-as-read', { method: 'PUT' });
        } catch (error) {
            console.error("Error marking notifications as read:", error);
        }
    };

    return (
        <div>
            <header>
                <h1>Manager Dashboard</h1>
            </header>
            <div className="container">
                <h2>Welcome to the Manager Page</h2>
                <div>
                    <p>{message}</p>
                </div>
                <p><a href="/logout">Logout</a></p>
                <div id="user-notifications">
                    <h3>Notifications <span id="notification-count">{notifications.length}</span></h3>
                    <div id="user-notification-list">
                        {notifications.map((notification, index) => (
                            <div key={index} className="notification-item">
                                <strong>{notification.title}</strong>
                                <p>{notification.message}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <footer>
                <p>&copy; 2024 Expense Trucker. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default ManagerDashboard;
