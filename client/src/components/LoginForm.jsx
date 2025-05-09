import { useState } from "react";
import { handleLogin, createUser } from "../helper/authFuncs";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async (event) => {
    event.preventDefault();
    console.log("User: ", username);
    console.log("Pass: ", password);

    const loginSuccess = await handleLogin(dispatch, username, password);

    if (loginSuccess) {
      navigate("/dashboard");
    } else {
      console.log("login failed");
    }

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
      <form className="login">
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

        <div className="loginButton">
          <button onClick={login}>Login</button>
          <button onClick={newUser}>Create</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
