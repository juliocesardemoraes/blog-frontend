import "./styles/navbar.css";

function Navbar(): JSX.Element {
  const type = "normal";
  if (type === "normal") {
    return (
      <nav>
        <div className="flex__container">
          <img src="/icons/faiscaLogo.svg"></img>
          <h4>Faisca</h4>
          <input />
        </div>
        <div className="flex__container">
          <div className="flex__container">
            <img src="/icons/write.svg"></img>
            <h5 className="small">Escrever</h5>
          </div>
          <button>User</button>
        </div>
      </nav>
    );
  }
  if (type === "noLogin") return <h1>Navbar</h1>;
  if (type === "mini") return <h1>Navbar</h1>;
  return <></>;
}

export default Navbar;
