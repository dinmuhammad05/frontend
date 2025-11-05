import React, { useState } from "react";
import { AppContext } from "../context/app-context/app-context";

const Card = ({ username, id, highlight }) => {
    const { dispatch } = React.useContext(AppContext);
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(username);

    const saveEdit = () => {
        dispatch({ type: "UPDATE_USER", value: { id, username: newName } });
        setIsEditing(false);
    };

    const deleteUser = () => {
        dispatch({ type: "DELETE_USER", id });
    };

    return (
        <div
            className={`relative overflow-hidden p-6 flex flex-col items-center justify-between gap-4 rounded-3xl shadow-2xl transform transition-transform duration-300 hover:scale-105
                ${highlight
                    ? "bg-gradient-to-r from-yellow-400 to-pink-400 text-white"
                    : "bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-white"
                }`}
        >
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat"></div>

            <div className="relative flex flex-col items-center gap-2 w-full">
                {isEditing ? (
                    <input
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-yellow-300 relative z-10"
                    />
                ) : (
                    <h2 className="text-xl font-bold relative z-10">{username}</h2>
                )}

                <div className="flex gap-3 relative z-10 mt-2">
                    {isEditing ? (
                        <button
                            onClick={saveEdit}
                            className="px-4 py-2 bg-green-400 rounded-lg hover:bg-green-500 shadow-lg transition"
                        >
                            Save
                        </button>
                    ) : (
                        <button
                            onClick={() => setIsEditing(true)}
                            className="px-4 py-2 bg-yellow-400 rounded-lg hover:bg-yellow-500 shadow-lg transition"
                        >
                            Edit
                        </button>
                    )}

                    <button
                        onClick={deleteUser}
                        className="px-4 py-2 bg-red-500 rounded-lg hover:bg-red-600 shadow-lg transition"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
