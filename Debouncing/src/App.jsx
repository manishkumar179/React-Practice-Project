import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Debouncing logic
  useEffect(() => {
    console.log("Timer started for:", search);

    const timer = setTimeout(() => {
      setDebouncedSearch(search);
      console.log("API call can be made for:", search);
    }, 500);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      console.log("Previous timer cleared");
    };
  }, [search]);

  return (
    <div className="container">
      <h1>React Debouncing Example</h1>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="result">
        <p>
          <strong>User Input:</strong>{" "}
          {search || "Nothing typed yet"}
        </p>

        <p>
          <strong>Debounced Value:</strong>{" "}
          {debouncedSearch || "Waiting..."}
        </p>
      </div>
    </div>
  );
}

export default App;