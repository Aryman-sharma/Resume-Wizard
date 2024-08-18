import React from "react";
import AddResume from "./components/AddResume";

export default function Dashboard() {
  return (
    <div className="p-10 md:px-20 lg:px-32">
      <h2 className="font-bold text-3xl">My Resume</h2>
      <p>Start Your Career Journey With Resume Wizard </p>
      <div
        className="grid grid-cols-2 
      md:grid-cols-3 lg:grid-cols-5 gap-5
      mt-10
      "
      >
        <AddResume></AddResume>
      </div>
    </div>
  );
}
