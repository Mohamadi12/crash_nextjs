"use client";

import { useState } from "react";
import ClientComponentTwo from "./client-component-two";

const ClientComponentOne = () => {
  const [name, setName] = useState("Nana");

  return (
    <>
      <h1>Client component one</h1>
      <ClientComponentTwo />
    </>
  );
};

export default ClientComponentOne;
