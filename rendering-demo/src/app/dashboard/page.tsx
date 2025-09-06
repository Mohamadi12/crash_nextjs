"use client";

import { useState } from "react";

const DashboardPage = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <h1>Dashboard Page</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-black text-black bg-white"
      />
      <p>Hello, {name}!</p>
    </div>
  );
};

export default DashboardPage;
