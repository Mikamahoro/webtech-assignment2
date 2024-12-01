import React, { useState } from "react";
import "./ForgotPassword.css";

const ForgotPassword = () => {
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send email to server
        setMessage("A reset link has been sent to your email address.");
    };

    return (
        <div className="container">
            <h1>Forgot Password</h1>
            <p>Enter your email address below, and we'll send you a link to reset your password.</p>

            {message && <div className="message">{message}</div>}

            <form onSubmit={handleSubmit}>
                <input type="email" id="email" name="email" placeholder="Enter your email" required />
                <button type="submit">Send Reset Link</button>
            </form>
        </div>
    );
};

export default ForgotPassword;
