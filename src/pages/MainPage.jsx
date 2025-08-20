import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserSelect from "../components/UserSelect";
import Leaderboard from "../components/Leaderboard";
import bg from "../assets/bg.jpg";
import { getUsers } from "../services/api";

const MainPage = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const fetchUsers = async () => {
    const res = await getUsers();
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div
      className="flex flex-col p-6 w-full h-full bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold mb-4 text-black">
          🎯 Points Claim System
        </h1>

        {/* Redirect Button to Add User Page */}
        <button
          onClick={() => navigate("/add-user")}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add User +
        </button>
      </div>

      {/* User selection dropdown */}
      <UserSelect users={users} onClaim={fetchUsers} />

      {/* Leaderboard */}
      <Leaderboard users={users} />

    </div>
  );
};

export default MainPage;
