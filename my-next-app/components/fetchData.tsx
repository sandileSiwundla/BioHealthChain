"use client";

import { useState } from "react";
import axios from "axios";

const FetchButton = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const ipfsHash = "QmQJK5y945soGWvorzsMSxvUjzX5QgcudYwManTbqZdP3S";

  

  const fetchDataFromIPFS = async () => {
    setLoading(true);
    setError(null);

    try {
      const ipfsNodeGateway = "http://127.0.0.1:8080/ipfs/";
      const response = await axios.get(`${ipfsNodeGateway}${ipfsHash}`);

      console.log("Fetched Data:", response.data); 
      const leavingData = response.data
    } catch (err) {
      setError("Error fetching data from your IPFS node");
    } finally {
      setLoading(false);
    }
    saveData()

  };

  const saveData = async () => {
    await fetch("/api/save-data", {
    method: "SHOW",
    })
    ;

  return (
    <button
      onClick={fetchDataFromIPFS}
      disabled={loading}
      style={{
        padding: "10px 20px",
        backgroundColor: loading ? "#888" : "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: loading ? "not-allowed" : "pointer",
      }}
    >
      {loading ? "Fetching..." : "Fetch from IPFS"}
    </button>
  );
};
}
export default FetchButton;
