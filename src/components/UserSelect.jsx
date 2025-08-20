import React, { useState } from "react";
import { claimPoints } from "../services/api";

const UserSelect = ({ users, onClaim }) => {
  const [selectedUser, setSelectedUser] = useState("");
  const [message, setMessage] = useState("");

  const handleClaim = async () => {
    if (!selectedUser) return alert("Please select a user");
    const res = await claimPoints(selectedUser);
    setMessage(`${res.data.user.name} got ${res.data.pointsAwarded} points!`);
    onClaim(); // refresh leaderboard
  };

  return (
    <div className="flex flex-col items-center mt-6">
      <h2 className="text-lg font-bold mb-4">Select a User</h2>

      <div className="flex flex-wrap justify-center gap-3 w-full px-2">
        {users.map((u) => (
          <div
            key={u._id}
            onClick={() => setSelectedUser(u._id)}
            className={`cursor-pointer p-3 border rounded-lg shadow-md min-w-[120px] text-center transition-all duration-200
              ${selectedUser === u._id ? "bg-blue-500 text-white border-blue-700" : "bg-white text-black"}`}
          >
            <p className="font-semibold">{u.name}</p>
            <p className="text-sm">{u.totalPoints} pts</p>
          </div>
        ))}
      </div>

      <button
        onClick={handleClaim}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded w-full max-w-sm"
      >
        Claim Points
      </button>

      {message && <p className="mt-2 text-green-600">{message}</p>}
    </div>
  );
};

export default UserSelect;
