import React from "react";
import { UserButton } from "@clerk/nextjs";
function Authentication() {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}

export default Authentication;
