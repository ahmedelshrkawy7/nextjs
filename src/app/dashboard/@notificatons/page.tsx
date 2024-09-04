import Link from "next/link";
import React from "react";

const Notifications = () => {
  return (
    <div>
      <h1 className="text-red-500">Notifications</h1>
      <Link href={"/dashboard/archived"}> arch</Link>
    </div>
  );
};

export default Notifications;
