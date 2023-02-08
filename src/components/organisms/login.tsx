import { useState } from "react";

function Login(): JSX.Element {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    let host = "blog-backend-seven-sigma.vercel.app";
    host = "localhost:3000";
    const url = `http://${host}/auth/login`;
    const body = { username: username, password: password };
    console.log(body);
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
    console.log(result);
    // const city = await fetch(`${websiteName}${cityQuery}${apiKey}${metric}`, {
    //   mode: "cors",
    // });
    // const cityResult = await city.json();
    // return cityResult;
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
