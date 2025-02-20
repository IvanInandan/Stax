import { useState } from "react";

const LoginForm = ({ handleLogin, createUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault();
    handleLogin(username, password);

    // Reset fields
    setUsername("");
    setPassword("");
  };

  const newUser = (event) => {
    event.preventDefault();
    createUser(username, password);

    // Reset fields
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <form>
        <div>
          Username
          <input
            type="text"
            value={username}
            name="username"
            id="username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>

        <div>
          Password
          <input
            type="password"
            value={password}
            name="password"
            id="password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>

        <button onClick={login}>Login</button>
        <button onClick={newUser}>Create</button>
      </form>
    </div>
  );
};

export default LoginForm;
