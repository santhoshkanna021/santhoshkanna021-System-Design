import React from "react";
import goldMedal from "../assets/Gold.jpg";     // 1st place
import silverMedal from "../assets/Silver.jpg"; // 2nd place
import bronzeMedal from "../assets/Bronze.jpg"; // 3rd place


const Leaderboard = ({ users }) => {
  const sortedUsers = [...users].sort((a, b) => b.totalPoints - a.totalPoints);
  const rankedUsers = sortedUsers.map((user, index) => ({ ...user, rank: index + 1 }));
  const top3 = rankedUsers.slice(0, 3);
  const rest = rankedUsers.slice(3);

  const getMedal = (index) => {
    if (index === 0) return goldMedal;
    if (index === 1) return silverMedal;
    if (index === 2) return bronzeMedal;
  };

  return (
    <div className="p-4 rounded mb-10">
      <h2 className="text-3xl font-bold mb-4 text-center">Leaderboard</h2>

      {/* Top 3 Highlighted */}
      <div className="flex justify-around mb-6 ">
        {top3.map((u, index) => (
          <div
            key={u._id}
            className="p-4 rounded-2xl w-1/4 text-center flex flex-col items-center 
                       transition-all duration-300 hover:bg-blue-500 hover:text-white 
                       hover:rounded-2xl cursor-pointer bg-white shadow-lg"
          >
            <img
              src={getMedal(index)}
              alt={`Rank ${index + 1}`}
              className="w-16 h-16 mb-2 rounded-full"
            />
            <p className="font-bold text-xl">#{u.rank}</p>
            <p className="font-semibold">{u.name}</p>
            <p>{u.totalPoints} pts</p>
          </div>
        ))}
      </div>

      {/* Styled Table for the rest */}
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full text-left border-collapse">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="p-3 text-sm font-semibold">Rank</th>
              <th className="p-3 text-sm font-semibold">User</th>
              <th className="p-3 text-sm font-semibold">Total Points</th>
            </tr>
          </thead>
          <tbody>
            {rest.map((u, i) => (
              <tr
                key={u._id}
                className={`border-b transition-colors duration-200 ${
                  i % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-blue-100`}
              >
                <td className="p-3">{u.rank}</td>
                <td className="p-3 font-medium">{u.name}</td>
                <td className="p-3">{u.totalPoints}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
