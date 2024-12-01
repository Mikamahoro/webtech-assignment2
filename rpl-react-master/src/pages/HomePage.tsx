import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="container">
            <h1>Welcome to the Home Page</h1>
            <p>Please choose an option below:</p>
            <p>login <Link to="/login">click here to login</Link>.</p>
            <p>register <Link to="/register">click here to register</Link>.</p>
        </div>
    );
};

export default Home;
