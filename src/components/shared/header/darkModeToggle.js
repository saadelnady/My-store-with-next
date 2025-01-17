import { parseCookies, setCookie } from "nookies";
import React, { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [dataTheme, setDataTheme] = useState("light");

  // Initialize theme from cookies
  useEffect(() => {
    const cookies = parseCookies();
    const savedTheme = cookies["data-theme"] || "light";
    setDataTheme(savedTheme);
    document.body.setAttribute("data-theme", savedTheme);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newTheme = dataTheme === "light" ? "dark" : "light";
    setDataTheme(newTheme);
    document.body.setAttribute("data-theme", newTheme);
    setCookie(null, "data-theme", newTheme, { path: "/" });
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        width: "75px",
        height: "40px",
        backgroundColor: "#ddd",
        borderRadius: "25px",
        position: "relative",
      }}
    >
      <div
        onClick={toggleDarkMode}
        className="toggle-circle d-flex align-items-center justify-content-center"
        style={{
          width: "25px",
          height: "25px",
          borderRadius: "50%",
          backgroundColor: dataTheme === "dark" ? "#343a40" : "#f8f9fa",
          color: dataTheme === "dark" ? "#ffc107" : "#0d6efd",
          position: "absolute",
          transition: "all 0.4s ease",
          left: dataTheme === "dark" ? "40px" : "5px",
          cursor: "pointer",
        }}
      >
        <i
          className={`bi ${
            dataTheme === "dark" ? "bi-moon-fill" : "bi-sun-fill"
          }`}
          style={{ fontSize: "1.2rem" }}
        ></i>
      </div>
    </div>
  );
};

export default DarkModeToggle;
