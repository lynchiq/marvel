import {Link} from "react-router-dom";
import {Container, Menu, MenuItem} from "./Heder.style";

export const Header = () => {
  return (
    <Container>
      <Menu>
        <MenuItem>
          <Link to={'/'}>Home</Link>
        </MenuItem>
        <MenuItem>
          <Link to={'/characters'}>Characters</Link>
        </MenuItem>
        <MenuItem>
          <Link to={'/comics'}>Comics</Link>
        </MenuItem>
      </Menu>
    </Container>
  )
}