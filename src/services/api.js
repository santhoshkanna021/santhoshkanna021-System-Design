import axios from "axios";

const API = axios.create({
  baseURL: "https://system-design-backend.onrender.com", // backend server
});

// Users
export const getUsers = () => API.get("/users");
export const addUser = (name) => API.post("/users", { name });

// Claim
export const claimPoints = (userId) => API.post(`/claim/${userId}`);
export const getHistory = () => API.get("/claim/history");
