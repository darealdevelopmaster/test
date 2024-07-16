import { useState } from "react";

const Exercises = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      console.log(data["access_token"]);
      console.log(data["refresh_token"]);

      window.localStorage.setItem("access_token", data["access_token"]);
      window.localStorage.setItem("refresh_token", data["refresh_token"]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <section className="min-h-screen">
        <h1>Exercises</h1>
        <form onSubmit={(e) => handleLogin(e)}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </section>
    </div>
  );
};

export default Exercises;
