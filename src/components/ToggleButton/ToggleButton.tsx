"use client";
import { useState } from "react";

const ToggleButton = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className={`flex items-center cursor-pointer rounded-full border border-main-light-grey transition-all duration-300 w-14 h-6 px-2
        ${
          isDark
            ? "bg-main-main-light-grey justify-start"
            : "bg-primary/80 justify-end"
        }
      `}
    >
      {isDark ? "🌙" : "☀️"}
    </button>
  );
};

export default ToggleButton;
