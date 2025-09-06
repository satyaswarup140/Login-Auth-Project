import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/auth/dashboard", { withCredentials: true })
      .then(res => setMessage(res.data.message))
      .catch(() => navigate("/"));
  }, [navigate]);

  const handleLogout = async () => {
    await axios.post("http://localhost:5000/auth/logout", {}, { withCredentials: true });
    navigate("/");
  };

  return (
    <div className="container">
      <h2>{message}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
