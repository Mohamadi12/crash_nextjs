"use client";

import { useState } from "react";

const ClientComponentTwo = () => {
  const [name, setName] = useState("Nana");

  return <div>Client component two</div>;
};

export default ClientComponentTwo;
