import { useState } from "react";

function Login(): JSX.Element {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const hostUrl =
      import.meta.env.VITE_HOST_LOCAL || process.env.VITE_HOST_LOCAL;
    const url = `http://${hostUrl}/auth/login`;
    const body = { username: username, password: password };
    const isLoggedIn = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(body),
    });
    const result = await isLoggedIn.json();
  };
  return (
    <div>
      <input
        placeholder="nome"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      ></input>
      <input
        placeholder="senha"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button onClick={() => login()}>Login</button>
    </div>
  );
}

export default Login;
