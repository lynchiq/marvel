import {Link} from "react-router-dom";
import {HeaderWrapper, Logo, Menu, MenuContainer, MenuItem} from "./Heder.style";

export const Header = () => {
  return (
    <HeaderWrapper>
      <MenuContainer>
        <Link to={'/'}><Logo>marvel comics</Logo></Link>
      </MenuContainer>
      <MenuContainer>
        <Menu>
          <MenuItem>
            <Link to={'/characters'}>Characters</Link>
          </MenuItem>
          <MenuItem>
            <Link to={'/comics'}>Comics</Link>
          </MenuItem>
          <MenuItem>
            <Link to={'/events'}>Events</Link>
          </MenuItem>
        </Menu>
      </MenuContainer>
    </HeaderWrapper>
  )
}