"use client";
import Link from "next/link";
import React, { useState } from "react";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [input, setInput] = useState("");
  return (
    <div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <Link href="/login" className="text-green-700">
        {" "}
        login
      </Link>
      <Link href="/register" className="text-green-700">
        {" "}
        register
      </Link>
      <Link href="/forgot-password" className="text-green-700">
        {" "}
        forgot password
      </Link>

      {children}
    </div>
  );
};

export default AuthLayout;
