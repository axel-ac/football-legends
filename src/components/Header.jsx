import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"
import logo from "../assets/football-legends.png"

const Header = () => {
  return (
    <Container>
        <Image src={logo} width="200px"></Image>
        <h1 className="my-2 font-monospace display-4 text-white fw-bold">FOOTBALL LEGENDS</h1>
    </Container>
  )
}

export default Header