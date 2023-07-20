"use client";

import { useState } from "react";

const page = () => {
  const [text, setText] = useState("default");
  return (
    <div>
      <h1>User Page ( {text} )</h1>
      <button onClick={() => setText("changed")}>Change</button>
    </div>
  );
};

export default page;
