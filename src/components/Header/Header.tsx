import {Link} from "react-router-dom";
import {HeaderWrapper, Logo, Menu, MenuContainer, MenuItem} from "./Heder.style";

export const Header = () => {
  return (
    <HeaderWrapper>
      <MenuContainer>
        <Logo>Marvel</Logo>
      </MenuContainer>
      <MenuContainer>
        <Menu>
          <MenuItem>
            <Link to={'/'}>Home</Link>
          </MenuItem>
          <MenuItem>
            <Link to={'/heroes'}>Heroes</Link>
          </MenuItem>
          <MenuItem>
            <Link to={'/favorites'}>Favorites</Link>
          </MenuItem>
          <MenuItem>
            <Link to={'/search'}>Search</Link>
          </MenuItem>
        </Menu>
      </MenuContainer>
    </HeaderWrapper>
  )
}