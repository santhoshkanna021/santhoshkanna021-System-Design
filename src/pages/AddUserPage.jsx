import React, { useState } from "react";
import { addUser } from "../services/api";
import { useNavigate } from "react-router-dom";
import bg from "../assets/bg.jpg";

const AddUserPage = ({ onAdd }) => {
  const [newUser, setNewUser] = useState("");
  const navigate = useNavigate();

  const handleAdd = async () => {
    if (!newUser.trim()) return;
    await addUser(newUser); // API call to add user
    if (onAdd) onAdd(); // refresh user list if callback exists
    navigate("/"); // redirect back to main page
  };

  return (
    <div
      className="w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="p-6 w-full max-w-md border rounded shadow bg-white bg-opacity-90">
        <h2 className="text-xl font-bold mb-4 text-center">Add New User</h2>
        <input
          type="text"
          className="border p-2 w-full mb-4"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
          placeholder="Enter user name"
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 w-full rounded hover:bg-green-600 transition"
          onClick={handleAdd}
        >
          Add User
        </button>
      </div>
    </div>
  );
};

export default AddUserPage;
