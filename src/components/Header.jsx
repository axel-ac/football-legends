import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"
import logo from "../assets/football-legends.png"

const Header = () => {
  return (
    <Container>
        <Image src={logo} width="175px"></Image>
        <h1 className="my-1 font-monospace display-5 text-white fw-bold">FOOTBALL LEGENDS</h1>
    </Container>
  )
}

export default Header