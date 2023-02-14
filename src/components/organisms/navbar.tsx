import { useCallback, useEffect, useState } from "react";
import Button from "../atoms/Button";
import Image from "../atoms/Image";
import Input from "../atoms/Input";
import Typography from "../atoms/Typography";
import Container from "../molecules/Container";
import "./styles/navbar.css";

/**
 * Navbar component
 * @return {JSX.Element} Navbar Element
 */
function Navbar(): JSX.Element {
  const [search, setSearch] = useState("");
  useEffect(() => {
    console.log("Search", search);
  }, [search]);
  const type = "normal";

  console.log("RENDER");

  if (type === "normal") {
    return (
      <nav>
        <Container center={true} gap={"2rem"}>
          <Container center={true} gap={"0.5rem"}>
            <Image src="/icons/faiscaLogo.svg"></Image>
            <Typography Tag={"h4"}>Faisca</Typography>
          </Container>
          <Container>
            <input
              placeholder={"AH"}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            ></input>
            <Button width={50} height={50} border={true}>
              <Image src="/icons/search.svg" width={25} height={25}></Image>
            </Button>
          </Container>
        </Container>
        <Container center={true} gap={"2rem"}>
          <Button width={100} height={50} radius={"1rem"}>
            <Image width={24} height={24} src="/icons/write.svg"></Image>
            <Typography Tag={"h5"} classes={"small"}>
              Escrever
            </Typography>
          </Button>
          <Button width={50} height={50} radius={"50%"}>
            <Image src="profilePlaceholder/2.svg"></Image>
          </Button>
        </Container>
      </nav>
    );
  }
  if (type === "noLogin") return <h1>Navbar</h1>;
  if (type === "mini") return <h1>Navbar</h1>;
  return <></>;
}

export default Navbar;
