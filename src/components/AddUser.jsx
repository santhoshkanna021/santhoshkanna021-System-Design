import React from "react";
import { useNavigate } from "react-router-dom";


const AddUserButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded"
      onClick={() => navigate("/add-user")}
    >
      Add User
    </button>
  );
};

export default AddUserButton;
