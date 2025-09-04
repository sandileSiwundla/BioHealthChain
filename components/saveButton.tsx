"use client";

import { useState } from "react";

export default function SaveButton() {
  const [message, setMessage] = useState("");

  const saveData = async () => {
    try {
      const response = await fetch("/api/save-data", {
        method: "GET",
      });

      const result = await response.json();
      setMessage(result.message);
    } catch (error) {
      setMessage("Error saving data");
    }
  };

  return (
    <div>
      <button onClick={saveData} className="p-2 bg-blue-500 text-white text-center mt-12 rounded">
        Save Data
      </button>
      {message && <p>{message}</p>}
    </div>
  );
}
